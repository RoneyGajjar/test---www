import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'footer',
    title: 'Global Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo (Light Variant)',
            type: 'image',
        }),
        defineField({
            name: 'linkGroups',
            title: 'Link Groups (Columns)',
            description: 'Create groupings like "Computer", "Resources", etc.',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'heading', type: 'string', title: 'Group Heading' },
                    {
                        name: 'links',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                { name: 'label', type: 'string' },
                                { name: 'url', type: 'string' }
                            ]
                        }]
                    }
                ]
            }]
        }),
        defineField({
            name: 'newsletter',
            title: 'Newsletter Config',
            type: 'object',
            fields: [
                { name: 'heading', type: 'string', initialValue: 'Newsletter' },
                { name: 'placeholder', type: 'string', initialValue: 'Your email' },
                { name: 'buttonText', type: 'string', initialValue: 'SIGN UP' }
            ]
        }),
        defineField({
            name: 'bottomBar',
            title: 'Bottom Bar Info',
            type: 'object',
            fields: [
                { name: 'language', type: 'string', initialValue: 'English' },
                { name: 'statusText', type: 'string', initialValue: 'All services online' },
                { name: 'certification', type: 'string', initialValue: 'Certified Secure' }
            ]
        })
    ]
});