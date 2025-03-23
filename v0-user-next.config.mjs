import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['placeholder.com'],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)

