/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
            port: '',
            pathname: '**',
          },
        ],
      },
      compiler : {
        styledComponents: true
        //do dopytania
      }
}

module.exports = nextConfig
