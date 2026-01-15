const dotenv = require('dotenv');
dotenv.config();
 
module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Root logo - copy from src/logo.png to root as logo.png and favicon.ico
  const fs = require('fs');
  const path = require('path');
  eleventyConfig.on('eleventy.before', () => {
    // Copy logo.png from src to _site root during build
    const srcLogo = path.join(process.cwd(), 'src', 'logo.png');
    const destLogo = path.join(process.cwd(), '_site', 'logo.png');
    const destFavicon = path.join(process.cwd(), '_site', 'favicon.ico');
    if (fs.existsSync(srcLogo)) {
      fs.mkdirSync(path.dirname(destLogo), { recursive: true });
      fs.copyFileSync(srcLogo, destLogo);
      fs.copyFileSync(srcLogo, destFavicon);
    }
  });
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/google043405ace894fdce.html");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

 
  // Expose env vars if needed in templates (keep debug optional)
  if (process.env.MAIL_KEY) {
    console.log("Loaded API key:", process.env.MAIL_KEY);
  }
  eleventyConfig.addGlobalData("mailKey", process.env.MAIL_KEY || "");
  
  // Add translation filter
  const translations = require('./src/_data/translations.js');
  eleventyConfig.addFilter('t', function(key, lang = 'bg') {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  });
  
  // Add language-aware URL filter
  eleventyConfig.addFilter('langUrl', function(url, lang = 'bg') {
    // Ensure url starts with /
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    // Don't add /en/ prefix for root
    if (url === '/') {
      return lang === 'en' ? '/en/' : '/';
    }
    // Add /en/ prefix for English
    if (lang === 'en') {
      return '/en' + url;
    }
    return url;
  });
 
  // Add global build date for sitemap
  eleventyConfig.addGlobalData("build", {
    date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  });

  // Determine pathPrefix: use explicit env or default to root
  const pathPrefix = process.env.PATH_PREFIX || process.env.ELEVENTY_PATH_PREFIX || "/";
 
  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};