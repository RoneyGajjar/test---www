import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'advancedText' },
                { type: 'featuredBanner' },
                { type: 'integrationDirectory' }
            ],
        }),
    ],
});