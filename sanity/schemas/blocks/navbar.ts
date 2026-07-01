import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'navbar', // This is the _type we will query
    title: 'Navigation Bar',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'navItems',
            title: 'Navigation Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string', title: 'Label' },
                    { name: 'url', type: 'string', title: 'URL' },
                    {
                        name: 'dropdownItems',
                        title: 'Dropdown Items',
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
            name: 'buttons',
            title: 'Action Buttons',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'url', type: 'string' },
                    {
                        name: 'variant',
                        title: 'Variant',
                        type: 'string',
                        options: { list: ['icon', 'outline', 'black'] }
                    }
                ]
            }]
        })
    ]
});