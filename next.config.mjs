/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    // useFileSystemPublicRoutes: false,
    useFileSystemPublicRoutes: true,
};

export default nextConfig;
