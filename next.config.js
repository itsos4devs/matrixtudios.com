// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    stripe_public_key: process.env.STRIPE_PUPLIC_KEY,
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  { hideSourcemaps: true }
);
