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
  try {
    const cached_data = client.readQuery({
      query: FETCH_PROJECTS
    })

    if (cached_data !== null) {
      return cached_data
    }

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
