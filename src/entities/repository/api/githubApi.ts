import axios from "axios";
import { Repository } from "../types/repository";

const BASE_URL = "https://api.github.com";
const PER_PAGE = 10;

export const githubApi = {
  async getOrgRepos(
    org: string,
    page: number = 1
  ): Promise<{ repos: Repository[]; total: number }> {
    try {
      const response = await axios.get<Repository[]>(
        `${BASE_URL}/orgs/${org}/repos`,
        {
          params: {
            per_page: PER_PAGE,
            page,
          },
        }
      );
      const linkHeader = response.headers.link;
      let total = 1;
      if (linkHeader) {
        const links = linkHeader.split(",");
        const lastLink = links.find((link: string) =>
          link.includes('rel="last"')
        );
        if (lastLink) {
          const match = lastLink.match(/page=(\d+)/);
          if (match) {
            total = parseInt(match[1], 10);
          }
        }
      }
      return { repos: response.data, total };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Failed to fetch repositories");
      }
    }
  },
};
