import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'buttonBlock',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
            title: 'Button Label',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'href',
            type: 'string',
            title: 'URL/Link'
        }),
        defineField({
            name: 'variant',
            title: 'Design Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary (White)', value: 'primary' },
                    { title: 'Secondary (Brand Purple)', value: 'secondary' },
                    { title: 'Dark (Black)', value: 'dark' },
                    { title: 'Outline', value: 'outline' },
                ],
            },
            initialValue: 'primary',
        }),
        defineField({
            name: 'size',
            title: 'Button Size',
            type: 'string',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Small', value: 'sm' },
                    { title: 'Large', value: 'lg' },
                ],
            },
            initialValue: 'default',
        }),
    ],
});