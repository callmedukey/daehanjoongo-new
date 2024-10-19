/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        esmExternals: 'loose',
    }, 
     async headers() {
        return [
            {
                source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2|ico)",
                locale: false,
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600, must-revalidate",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;