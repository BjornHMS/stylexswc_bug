import type { NextConfig } from "next";

import stylexPlugin from '@stylexswc/nextjs-plugin';

const withStylex = stylexPlugin({
  // Add any StyleX options here
  rsOptions: {
    aliases: { 'styles/*': ['./src/styles/*'] },
    unstable_moduleResolution: {
      type: 'bundler',
    },
    dev: process.env.NODE_ENV === 'development',
    runtimeInjection: false,
    treeshakeCompensation: true,
    styleResolution: 'application-order',
  },
});

const nextConfig: NextConfig = {
  devIndicators: { position: 'bottom-right' },
};

export default withStylex(nextConfig);
