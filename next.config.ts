import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
      {
				protocol: 'https',
				hostname: 'us-west-2.graphassets.com',
				pathname: '/**',
			},
      {
				protocol: 'https',
				hostname: 'via.placeholder.com',
				pathname: '/**',
			},
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
