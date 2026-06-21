import type { APIRoute } from "astro";
import {
  bold,
  cyan,
  green,
  red,
  white,
  magenta,
  yellow,
  gray,
} from "yoctocolors";
import boxen from "boxen";

export const GET: APIRoute = async () => {
  // --- Top ASCII Section (Kept from your previous code) ---
  const logoAsciiArt = [
    "███████╗███████╗███╗   ██╗ ██████╗ ",
    "██╔════╝██╔════╝████╗  ██║██╔═══██╗",
    "███████╗█████╗  ██╔██╗ ██║██║   ██║",
    "╚════██║██╔══╝  ██║╚██╗██║██║   ██║",
    "███████║███████╗██║ ╚████║╚██████╔╝",
    "╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ",
  ];

  const infoText = [
    `${bold(green("Welcome to my Portfolio website!"))}`,
    "Checkout my projects and blogs as well",
    "",
    `Source: ${cyan("https://github.com/cattyman919/portfolio/tree/v2")}`,
  ];

  const topGap = "    "; // 4 spaces between the columns
  const leftWidth = 35; // The maximum character width of the ASCII art
  let outputLines = [];

  const maxTopLines = Math.max(logoAsciiArt.length, infoText.length);

  for (let i = 0; i < maxTopLines; i++) {
    const leftText = green((logoAsciiArt[i] || "").padEnd(leftWidth, " "));
    const rightText = infoText[i] || "";
    outputLines.push(`${leftText}${topGap}${rightText}`);
  }

  const barBlock = "█".repeat(leftWidth);
  outputLines.push(`${red(barBlock)}`);
  outputLines.push(`${white(barBlock)}`);

  outputLines.push("");
  outputLines.push(""); // Extra space before boxes

  // --- 1. Generate Left Box (About) ---
  const aboutText =
    "Hi, I'm Seno! I'm a software developer with a passion for creating innovative solutions and sharing knowledge through my projects and blogs.";

  const ABOUT_BOX_WIDTH = 40;

  const aboutBox = boxen(aboutText, {
    title: bold(yellow("About")),
    padding: 1,
    width: ABOUT_BOX_WIDTH,
    borderColor: "green",
  });
  const aboutBoxLines = aboutBox.split("\n");

  // --- 2. Generate Right Box (Socials) ---
  const socialsContent = [
    `${yellow("Instagram".padEnd(11))}│ ${cyan("https://www.instagram.com/senohebat")}`,
    `${yellow("Linkedin".padEnd(11))}│ ${cyan("https://www.linkedin.com/in/seno-pamungkas-rahman-714341192/")}`,
    `${yellow("Github".padEnd(11))}│ ${cyan("https://github.com/cattyman919")}`,
  ].join("\n");

  const socialsBox = boxen(socialsContent, {
    title: bold(yellow("Socials")),
    borderColor: "green",
    padding: { top: 0, bottom: 0, left: 1, right: 1 },
  });
  const socialsBoxLines = socialsBox.split("\n");

  // --- 3. Merge Boxes Side-by-Side ---
  const maxBoxLines = Math.max(aboutBoxLines.length, socialsBoxLines.length);
  const boxGap = "  "; // Space between the two boxes

  for (let i = 0; i < maxBoxLines; i++) {
    // If the left box runs out of lines, pad it with blank spaces equal to its exact width
    const leftLine = aboutBoxLines[i] || " ".repeat(ABOUT_BOX_WIDTH);

    // If the right box runs out of lines, just leave it blank
    const rightLine = socialsBoxLines[i] || "";

    outputLines.push(`${leftLine}${boxGap}${rightLine}`);
  }

  outputLines.push("");
  outputLines.push(bold(yellow("Legend")));
  outputLines.push(`${green("$ curl")} senop.dev`);
  outputLines.push(`${green("$ curl")} senop.dev/projects`);
  outputLines.push(`${green("$ curl")} senop.dev/blogs`);
  outputLines.push("");

  // --- Final Output Render ---
  const terminalContent = outputLines.join("\n");

  return new Response(terminalContent.trimEnd(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
