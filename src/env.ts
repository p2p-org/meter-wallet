import * as Path from "path";
import * as UrlUtils from "@/common/url-utils";

const devMode = process.env.NODE_ENV !== "production";

const env = {
  devMode,

  index: devMode
    ? "http://localhost:9080/"
    : UrlUtils.filePathToUrl(Path.resolve(__dirname, "index.html")),

  preload: UrlUtils.filePathToUrl(
    devMode
      ? Path.resolve(__dirname, "..", "dist", "electron", "preload.js")
      : Path.resolve(__dirname, "preload.js")
  ),

  xWorker: UrlUtils.filePathToUrl(
    devMode
      ? Path.resolve(__dirname, "..", "dist", "electron", "x-worker.html")
      : Path.resolve(__dirname, "x-worker.html")
  ),

  launchScreen: devMode
    ? "http://localhost:9080/static/launch-screen.html"
    : UrlUtils.filePathToUrl(
        Path.resolve(__dirname, "static", "launch-screen.html")
      ),

  about: devMode
    ? "http://localhost:9080/static/about.html"
    : UrlUtils.filePathToUrl(Path.resolve(__dirname, "static", "about.html")),

  logoUrl: devMode
    ? "http://localhost:9080/static/logo.png"
    : UrlUtils.filePathToUrl(Path.resolve(__dirname, "static", "logo.png")),

  logoOnlyUrl: devMode
    ? "http://localhost:9080/static/logo-only.png"
    : UrlUtils.filePathToUrl(
        Path.resolve(__dirname, "static", "logo-onlyk.png")
      )
};

export default env;
