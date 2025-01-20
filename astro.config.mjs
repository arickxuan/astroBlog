import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      // 配置Tailwind选项
      config: { content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'] },
    }),
  ],

  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
    remarkPlugins: [ [remarkToc, { heading: 'toc', maxDepth: 3 } ] ],
    rehypePlugins: [rehypeAccessibleEmojis],
  },

  //output: 'server', //ssr

  adapter: node({
    mode: 'standalone',
  }),
});