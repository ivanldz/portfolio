import { defineCollection, z } from 'astro:content';

const expertice = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        body: z.string(),
        lenguajes: z.array(z.string()),
    })
});


export const collections = { expertice };