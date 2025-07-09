import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
await jiti.import("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/auth",
    "@acme/db",
    "@acme/db-zenstack",
    "@acme/ui",
    "@acme/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  /** Configure server external packages to avoid conflicts */
  serverExternalPackages: [
    "@libsql/client",
    "@libsql/isomorphic-ws",
    "@libsql/darwin-arm64",
    "@libsql/hrana-client", 
    "@libsql/isomorphic-fetch",
    "libsql",
    "@prisma/adapter-libsql",
  ],

  /** Configure webpack to ignore problematic files */
  webpack: (config, { isServer }) => {
    // Add fallbacks for Node.js modules that aren't available in the browser
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Add rule to ignore README.md, LICENSE, and .node files
    config.module.rules.push({
      test: /\.(md|txt|LICENSE|node)$/,
      use: 'null-loader',
    });

    // Ignore problematic libsql packages on client-side
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@libsql/client': false,
        '@libsql/isomorphic-ws': false, 
        '@libsql/darwin-arm64': false,
        '@libsql/hrana-client': false,
        '@libsql/isomorphic-fetch': false,
        '@prisma/adapter-libsql': false,
        'libsql': false,
      };
    }

    return config;
  },
};

export default config;
