const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname),
    },
  },
};
