const { withContentCollections } = require('content-collections')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = withContentCollections(nextConfig)