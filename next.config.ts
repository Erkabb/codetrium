import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    serverActions: {
        bodySizeLimit: '1gb',
    },
};

export default nextConfig;
