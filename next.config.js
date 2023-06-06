/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains: ["help.twitter.com", "pbs.twimg.com", "lh3.googleusercontent.com" ],
      protocol: 'https'
    }

  }
  
  module.exports = nextConfig