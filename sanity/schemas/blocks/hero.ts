import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            title: 'Hero Content Blocks',
            type: 'array',
            of: [
                { type: 'advancedText' },
                { type: 'searchBarBlock' },
                { type: 'buttonBlock' },
            ],
        }),
    ],
});