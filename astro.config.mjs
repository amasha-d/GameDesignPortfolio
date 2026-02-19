// @ts-check
import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner, repo] = repository.split("/");
const isUserSite = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "https://example.com",
  base: process.env.GITHUB_ACTIONS ? (isUserSite ? "/" : `/${repo}/`) : "/",
});
