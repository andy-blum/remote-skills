export default function (eleventyConfig) {
  eleventyConfig.addFilter("padStart", (value, length, char) => {
    return String(value).padStart(length, char);
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
