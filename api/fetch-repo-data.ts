"use server";

import { repoApiUrl } from "@/lib/repo-config";

export const fetchRepoData = async () => {
  const response = await fetch(`${repoApiUrl}/commits/main`);
  const data = await response.json();

  if (data.status && data.status !== 200) {
    return {
      data: null,
      error: "Failed to fetch repo data",
    };
  }

  return {
    data: data,
    error: null,
  };
};
