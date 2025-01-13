/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['videograph.pythonanywhere.com', 'mallaysback.pythonanywhere.com','img.youtube.com'],

    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
