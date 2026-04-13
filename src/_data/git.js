import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default function () {
  const repo = getRepoPath();
  const rawBaseUrl = `https://raw.githubusercontent.com/${repo}`;

  const skillsDir = path.resolve("src/skills");
  const skillNames = fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const skills = {};
  for (const name of skillNames) {
    skills[name] = getSkillVersions(name);
  }

  return { repo, rawBaseUrl, skills };
}

function getRepoPath() {
  if (process.env.GITHUB_REPOSITORY) {
    return process.env.GITHUB_REPOSITORY;
  }
  try {
    const remote = execSync("git remote get-url origin", {
      encoding: "utf-8",
    }).trim();
    return remote.replace(/^.*github\.com[:/]/, "").replace(/\.git$/, "");
  } catch {
    return "";
  }
}

function getSkillVersions(name) {
  try {
    const log = execSync(
      `git log --format="%H|%aI|%s" -- src/skills/${name}/`,
      { encoding: "utf-8" },
    ).trim();
    if (!log) return [];
    return log.split("\n").map((line) => {
      const [hash, date, ...rest] = line.split("|");
      return {
        hash,
        shortHash: hash.slice(0, 7),
        date: date.slice(0, 10),
        message: rest.join("|"),
      };
    });
  } catch {
    return [];
  }
}
