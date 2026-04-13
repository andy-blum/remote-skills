import fs from "fs";
import path from "path";
import { globSync } from "tinyglobby";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("padStart", (value, length, char) => {
    return String(value).padStart(length, char);
  });

  // After build, copy raw .md files into _site so agents can fetch them directly.
  // e.g. /skills/acli-jira/SKILL.md, /skills/senior-frontend-dev/references/html.md
  eleventyConfig.on("eleventy.after", () => {
    const files = globSync("src/skills/**/*.md");

    for (const file of files) {
      // index.md → SKILL.md (matches the Claude Code convention)
      // other .md files keep their filename
      const dest = file
        .replace(/^src/, "_site")
        .replace(/\/index\.md$/, "/SKILL.md");

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(file, dest);
    }
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
}
