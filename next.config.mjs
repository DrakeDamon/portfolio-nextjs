import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const isGH = process.env.GITHUB_PAGES === 'true';
const repoName = 'portfolio-nextjs';

/** @type {import('next').NextConfig} */
const base = {
  output: 'export',
  basePath: isGH ? `/${repoName}` : undefined,
  assetPrefix: isGH ? `/${repoName}/` : undefined,
  images: { unoptimized: true },
  pageExtensions: ['ts','tsx','mdx','md'],
};

export default withMDX(base);