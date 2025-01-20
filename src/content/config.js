// 1. 从 `astro:content` 导入工具函数
import { defineCollection, z } from 'astro:content';

// 2. 导入加载器
import { glob, file } from 'astro/loaders';

// 3. 定义你的集合
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./data/blog" }),
    schema: z.object({
        name: z.string().optional(),
        title: z.string().optional(),
    }),
});
const docs = defineCollection({ loader: glob({ pattern: "**/*.md", base: "./data/docs" }), });



// 4. 导出一个 `collections` 对象来注册你的集合
export const collections = { blog, docs };