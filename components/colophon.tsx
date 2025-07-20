import { fetchRepoData } from "@/api/fetch-repo-data";
import { repoUrl } from "@/lib/repo-config";
import { StyledLink } from "@/components/typography";

export const Colophon = async () => {
  const { data: repoData, error } = await fetchRepoData();

  const format = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      {repoData && (
        <p className="text-muted-foreground">
          <br />
          <br />
          <br />
          <br />
          {"//"} last updated {format(repoData.commit.author.date)} by{" "}
          <StyledLink href={`${repoData.author.html_url}`} target="_blank">
            @{repoData.author.login}
          </StyledLink>{" "}
          <br />
          {"//"} commit{" "}
          <StyledLink href={`${repoUrl}/commits/main`} target="_blank">
            {repoData.sha.slice(0, 7)}
          </StyledLink>{" "}
        </p>
      )}
      {error && (
        <p className="text-muted-foreground">
          {"//"} could not fetch repo data
        </p>
      )}
    </div>
  );
};
