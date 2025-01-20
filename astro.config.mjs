import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      // 配置Tailwind选项
      config: { content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'] },
    }),
  ],
});