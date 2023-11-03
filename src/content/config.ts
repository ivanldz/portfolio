import { defineCollection, z } from 'astro:content';

const expertice = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        lenguajes: z.array(z.string()),
    })
});

const work = defineCollection({
    type: 'content',
    schema: z.object({
        company: z.string(),
        rol: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        responsabilities: z.array(z.string()),
        tecnologies: z.array(z.string()),
        icon_path: z.string()
    })
});

const project = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        img: z.string(),
        body: z.string(),
        repository: z.string()
    })
});

const education = defineCollection({
    type: 'content',
    schema: z.object({
        institute: z.string(),
        career: z.string(),
        start_date: z.string(),
        end_date: z.string(),
    })
});


export const collections = { expertice, work, project, education };