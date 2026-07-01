import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'integrationCTA',
    title: 'Integration CTA Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'advancedText' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'advancedText' }),
        defineField({ name: 'icon', title: 'Grid Icon', type: 'image' }),
        defineField({
            name: 'buttons',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'url', type: 'url' },
                    { name: 'variant', type: 'string', options: { list: ['black', 'outline'] } }
                ]
            }]
        })
    ],
    // ... preview logic remains same
});