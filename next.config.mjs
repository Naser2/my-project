/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      { protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
      { protocol: 'https',
      hostname: 'https://eadem.co',
      pathname: '**'},
      { protocol: 'https',
      hostname: 'https://static.wixstatic.com',
      pathname: '**'},

      { protocol: 'https',
      hostname: 'vercel.com',
      pathname: '**'},
     
    { protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '**'
    },
    { protocol: 'https',
      hostname: 'cecred.com',
      pathname: '**'
    }
    ]
  },};

export default nextConfig;
