import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const contentDir = path.join(rootDir, "src/content/open-source");
const cachePath = path.join(rootDir, "src/data/open-source.generated.json");

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "senop-portfolio-open-source-sync",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function findContributionFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".yaml"))
    .map((entry) => path.join(dir, entry.name));
}

async function readCache() {
  try {
    return JSON.parse(await readFile(cachePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

function getContributionId(filePath) {
  return path.basename(filePath, ".yaml");
}

function parseContributionUrls(source, filePath) {
  const urls = Array.from(
    source.matchAll(/^\s*-?\s*contributionUrl:\s*["']?([^"'\n]+)["']?\s*$/gm),
    (match) => match[1].trim(),
  );

  if (urls.length === 0) {
    throw new Error(
      `Missing contributionUrl entries in ${path.relative(rootDir, filePath)}`,
    );
  }

  return urls;
}

function parseGitHubPullRequestUrl(contributionUrl) {
  const url = new URL(contributionUrl);
  const [, owner, repo, type, pullNumber] = url.pathname.split("/");

  if (
    url.hostname !== "github.com" ||
    !owner ||
    !repo ||
    type !== "pull" ||
    !pullNumber
  ) {
    throw new Error(
      `Unsupported contributionUrl: ${contributionUrl}. Expected https://github.com/{owner}/{repo}/pull/{number}`,
    );
  }

  return { owner, repo, pullNumber };
}

async function fetchJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  return response.json();
}

function toLanguages(languages) {
  const entries = Object.entries(languages).sort(([, a], [, b]) => b - a);
  const totalBytes = entries.reduce((total, [, bytes]) => total + bytes, 0);

  if (totalBytes === 0) return [];

  return entries.map(([name, bytes]) => ({
    name,
    bytes,
    percentage: Math.round((bytes / totalBytes) * 1000) / 10,
  }));
}

async function fetchMetadata(contributionUrl) {
  const { owner, repo, pullNumber } =
    parseGitHubPullRequestUrl(contributionUrl);
  const apiBase = `https://api.github.com/repos/${owner}/${repo}`;
  const [repository, pullRequest, languages] = await Promise.all([
    fetchJson(apiBase),
    fetchJson(`${apiBase}/pulls/${pullNumber}`),
    fetchJson(`${apiBase}/languages`),
  ]);

  const mergedAt = pullRequest.merged_at ?? null;
  const status = mergedAt
    ? "merged"
    : pullRequest.state === "open"
      ? "open"
      : "closed";

  return {
    contributionUrl,
    contributionTitle: pullRequest.title,
    repositoryName: repository.full_name,
    repositoryUrl: repository.html_url,
    stars: repository.stargazers_count,
    status,
    createdAt: pullRequest.created_at,
    mergedAt,
    sortDate: mergedAt ?? pullRequest.created_at,
    languages: toLanguages(languages),
    fetchedAt: new Date().toISOString(),
  };
}

function getCacheKey(id, contributionUrl) {
  const { pullNumber } = parseGitHubPullRequestUrl(contributionUrl);
  return `${id}#${pullNumber}`;
}

const previousCache = await readCache();
const contributionFiles = await findContributionFiles(contentDir);
const nextCache = {};
let hasFailure = false;

for (const filePath of contributionFiles) {
  const id = getContributionId(filePath);
  const source = await readFile(filePath, "utf8");

  if (source.trim().length === 0) {
    console.warn(
      `Skipping empty open-source contribution: ${path.relative(rootDir, filePath)}`,
    );
    continue;
  }

  if (source.trimStart().startsWith("#")) {
    console.warn(
      `Skipping commented open-source contribution example: ${path.relative(rootDir, filePath)}`,
    );
    continue;
  }

  const contributionUrls = parseContributionUrls(source, filePath);

  for (const contributionUrl of contributionUrls) {
    const cacheKey = getCacheKey(id, contributionUrl);

    try {
      nextCache[cacheKey] = await fetchMetadata(contributionUrl);
      console.log(`Synced open-source contribution: ${cacheKey}`);
    } catch (error) {
      const cached = previousCache[cacheKey] ?? previousCache[id];
      if (cached?.contributionUrl === contributionUrl) {
        nextCache[cacheKey] = cached;
        console.warn(
          `Using cached open-source metadata for ${cacheKey}: ${error.message}`,
        );
      } else {
        hasFailure = true;
        console.error(
          `Failed to sync open-source contribution ${cacheKey}: ${error.message}`,
        );
      }
    }
  }
}

await writeFile(cachePath, `${JSON.stringify(nextCache, null, 2)}\n`);

if (hasFailure) {
  process.exitCode = 1;
}
