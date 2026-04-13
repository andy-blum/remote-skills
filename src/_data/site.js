export default function () {
  const isServe = process.env.ELEVENTY_RUN_MODE === "serve";
  const baseUrl = process.env.ELEVENTY_SITE_URL || (isServe ? "http://localhost:8080" : "");
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "";

  return {
    url: baseUrl,
  };
}
