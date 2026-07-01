import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'advancedText',
    title: 'Advanced Text Block',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Children (Inner Text)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'config',
            title: 'CVA',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },

            fieldsets: [
                { name: 'row1', options: { columns: 3 } },
                { name: 'row2', options: { columns: 3 } },
            ],

            fields: [
                defineField({
                    name: 'tag',
                    title: 'HTML Tag (Structure)',
                    type: 'string',
                    fieldset: 'row1',
                    options: {
                        list: [
                            { title: 'Paragraph (p)', value: 'p' },
                            { title: 'Heading 1 (h1)', value: 'h1' },
                            { title: 'Heading 2 (h2)', value: 'h2' },
                            { title: 'Heading 3 (h3)', value: 'h3' },
                            { title: 'Heading 5 (h5)', value: 'h5' },
                            { title: 'Span', value: 'span' },
                            { title: 'Label', value: 'label' },
                            { title: 'Div', value: 'div' },
                        ],
                    },
                    initialValue: 'p',
                }),
                defineField({
                    name: 'type',
                    title: 'Type (CVA Visual Style)',
                    type: 'string',
                    fieldset: 'row1',
                    options: {
                        list: [
                            // THE 'value' HERE MUST EXACTLY MATCH YOUR REACT TYPESCRIPT UNION
                            { title: 'Display H1', value: 'h1' },
                            { title: 'Display H2', value: 'h2' },
                            { title: 'Display H3', value: 'h3' },
                            { title: 'Display H5', value: 'h5' },
                            { title: 'Standard Paragraph', value: 'p' },
                            { title: 'Body Text', value: 'body' },
                            { title: 'Label', value: 'label' },
                            { title: 'Span Text', value: 'span' },
                        ],
                    },
                    initialValue: 'body',
                }),
                defineField({
                    name: 'textSize',
                    title: 'Text Size Override',
                    type: 'string',
                    fieldset: 'row1',
                    options: {
                        list: [
                            { title: 'Default (Inherit)', value: '' },
                            { title: 'Small', value: 'text-sm md:text-base' },
                            { title: 'Medium', value: 'text-base md:text-lg' },
                            { title: 'Large', value: 'text-xl md:text-2xl' },
                            { title: 'XL', value: 'text-4xl md:text-5xl' },
                            { title: 'Massive', value: 'text-5xl md:text-6xl' },
                        ],
                    },
                }),
                defineField({
                    name: 'width',
                    title: 'Width',
                    type: 'string',
                    fieldset: 'row1',
                    options: {
                        list: [
                            { title: 'Extra Small (320px)', value: 'max-w-xs' },
                            { title: 'Small (384px)', value: 'max-w-sm' },
                            { title: 'Medium (448px)', value: 'max-w-md' },
                            { title: 'Large (576px)', value: 'max-w-lg' },
                            { title: 'XL (672px)', value: 'max-w-xl' },
                            { title: '2XL (768px)', value: 'max-w-2xl' },
                            { title: '3XL (896px)', value: 'max-w-3xl' },
                            { title: '4XL (1024px)', value: 'max-w-4xl' },
                            { title: '5XL (1152px)', value: 'max-w-5xl' },
                            { title: '6XL (1280px)', value: 'max-w-6xl' },
                            { title: '7XL (1408px)', value: 'max-w-7xl' },
                            { title: 'Full Width', value: 'w-full' },
                        ],
                    },
                    initialValue: 'max-w-4xl',
                }),

                defineField({
                    name: 'color',
                    title: 'Color',
                    type: 'string',
                    fieldset: 'row2',
                    options: {
                        list: [
                            { title: 'Default Black', value: 'text-gray-900' },
                            { title: 'Muted Gray', value: 'text-gray-500' },
                            { title: 'White', value: 'text-white' },
                            { title: 'Brand Blue', value: 'text-brand-blue' },
                        ]
                    },
                }),
                defineField({
                    name: 'textAlign',
                    title: 'Text align',
                    type: 'string',
                    fieldset: 'row2',
                    options: { list: [{ title: 'Left', value: 'text-left' }, { title: 'Center', value: 'text-center' }, { title: 'Right', value: 'text-right' }] },
                }),

                defineField({
                    name: 'margin',
                    title: 'Margin',
                    type: 'object',
                    fieldset: 'row2',
                    options: { columns: 2 },
                    fields: [
                        defineField({
                            name: 'top',
                            title: 'Top',
                            type: 'string',
                            options: { list: [{ title: '0', value: 'mt-0' }, { title: '4', value: 'mt-4' }, { title: '8', value: 'mt-8' }, { title: '12', value: 'mt-12' }, { title: '16', value: 'mt-16' }, { title: '24', value: 'mt-24' }, { title: '32', value: 'mt-32' }] },
                        }),
                        defineField({
                            name: 'bottom',
                            title: 'Bottom',
                            type: 'string',
                            options: { list: [{ title: '0', value: 'mb-0' }, { title: '4', value: 'mb-4' }, { title: '8', value: 'mb-8' }, { title: '12', value: 'mb-12' }, { title: '16', value: 'mb-16' }, { title: '24', value: 'mb-24' }, { title: '32', value: 'mb-32' }] },
                        }),
                        defineField({
                            name: 'left',
                            title: 'Left',
                            type: 'string',
                            options: { list: [{ title: '0', value: 'ml-0' }, { title: '4', value: 'ml-4' }, { title: '8', value: 'ml-8' }, { title: '12', value: 'ml-12' }, { title: '16', value: 'ml-16' }, { title: '24', value: 'ml-24' }, { title: '32', value: 'ml-32' }] },
                        }),
                        defineField({
                            name: 'right',
                            title: 'Right',
                            type: 'string',
                            options: { list: [{ title: '0', value: 'mr-0' }, { title: '4', value: 'mr-4' }, { title: '8', value: 'mr-8' }, { title: '12', value: 'mr-12' }, { title: '16', value: 'mr-16' }, { title: '24', value: 'mr-24' }, { title: '32', value: 'mr-32' }] },
                        }),
                    ],
                }),
            ]
        }),
    ],
});