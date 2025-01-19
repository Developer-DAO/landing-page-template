module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  defaultNS: "common",
  ns: ["common"],
  nonExplicitSupportedLngs: true,
  pages: {
    "*": ["common"], // This ensures 'common' namespace is loaded for all pages
    "/blog": ["common"],
    "/blog/[slug]": ["common"], // Add this line to load 'common' namespace for blog posts
  },
  react: {
    useSuspense: false,
  },
};
