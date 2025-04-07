// src/app/page.tsx (Server Component)
import { gql } from '@apollo/client';
import ClientPageWrapper from './clientPageWrapper';
import { client } from "@/lib/apollo-client";

const FETCH_PROJECTS = gql
  `query fetch_projects {
  fetchProjects {
    id
    title
    image
    short_description
    languages
    github_repo
    website
    date
  }
}`
// Pre-fetch data on server if possible
async function getInitialProjects() {
  // Server-side data fetching if possible
  // You could use Apollo's SSR features here or direct fetch
  try {
    const { data } = await client.query({
      query: FETCH_PROJECTS
    })
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return null;
  }
}

export default async function Page() {
  const initialProjects = await getInitialProjects();

  return (
    <ClientPageWrapper initialProjects={initialProjects.fetchProjects} />
  );
}
