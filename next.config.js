import path from "path";
import process from "process";
import bundleAnalyzer from "@next/bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";
import withPlugins from "next-compose-plugins";

const withBundleAnalyzer = bundleAnalyzer({
  // enabled: process.env.ANALYZE === "true",
  // openAnalyzer: true,
});

const WORKSPACE = process.cwd();
const useSwc = true;

// const realModule = function (modulePath) {
//   if (modulePath.includes("node_modules")) {
//     const lastIndex = modulePath.lastIndexOf("node_modules");
//     return path.resolve(WORKSPACE, modulePath.substr(lastIndex));
//   }
//   return modulePath;
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/_next/static/favicon.ico",
      },
    ];
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          minify: useSwc ? TerserPlugin.swcMinify : TerserPlugin.terserMinify,
        }),
      ],
      splitChunks: {
        maxAsyncRequests: Infinity,
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          default: false,
          vendor: {
            test: function (module) {
              if (
                module.resource &&
                module.resource.indexOf(
                  path.join(WORKSPACE, "node_modules/.pnpm/antd")
                ) !== -1
              ) {
                return true;
              }
              return false;
            },
            name: "vendor",
            chunks: "all",
            reuseExistingChunk: true,
          },
          common_custom: {
            test: function (module) {
              if (
                module.resource &&
                module.resource.indexOf(
                  path.join(WORKSPACE, "node_modules")
                ) === -1 &&
                module.resource.indexOf(path.join(WORKSPACE, "lottie")) !== -1
              ) {
                return true;
              }
              return false;
            },
            name: "common_custom",
            chunks: "all",
            reuseExistingChunk: true,
          },
          business: {
            test: function (module) {
              if (
                module.resource &&
                module.resource.indexOf(
                  path.join(WORKSPACE, "node_modules")
                ) === -1 &&
                module.resource.indexOf(path.join(WORKSPACE, "src")) !== -1
              ) {
                return true;
              }
              return false;
            },
            name: "business",
            chunks: "all",
            reuseExistingChunk: true,
            priority: 2,
          },
          common_css: {
            name: "common_css",
            test: function (module) {
              if (
                module &&
                module.nameForCondition &&
                /^(?!.*node_modules).*\.css$/.test(module.nameForCondition())
              ) {
                return true;
              }
              return false;
            },
            chunks: "all",
          },
        },
      },
    };

    return config;
  },
};

// export default withBundleAnalyzer(nextConfig);
export default nextConfig;
