import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'logoStrip',
    title: 'Logo Strip',
    type: 'object',
    fields: [
        defineField({
            name: 'apps',
            title: 'Apps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'logo', type: 'image' },
                    { name: 'bgClass', type: 'string', title: 'Tailwind Background Class' },
                    { name: 'hasInnerShadow', type: 'boolean', initialValue: false }
                ]
            }],
        }),
    ],
});