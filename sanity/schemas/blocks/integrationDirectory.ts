import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'integrationDirectory',
    title: 'Integration Directory',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Main Heading',
            type: 'string',
            initialValue: 'All',
        }),
        // --- LEFT COLUMN: CATEGORIES ---
        defineField({
            name: 'categories',
            title: 'Sidebar Categories',
            description: 'Add the list items for the left column (e.g., Automation, Cloud, Build).',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'sidebarGap',
            title: 'Sidebar Item Spacing',
            description: 'Controls the vertical gap between category links.',
            type: 'string',
            options: {
                list: [
                    { title: 'Tight (4px)', value: 'gap-1' },
                    { title: 'Small (8px)', value: 'gap-2' },
                    { title: 'Medium (16px)', value: 'gap-4' },
                    { title: 'Large (24px)', value: 'gap-6' },
                    { title: 'Extra Large (32px)', value: 'gap-8' },
                ],
            },
            initialValue: 'gap-4',
        }),
        // --- RIGHT COLUMN: CARDS ---
        defineField({
            name: 'integrationCards',
            title: 'Integration Cards',
            description: 'Add the integration cards for the right column.',
            type: 'array',
            of: [
                defineField({
                    name: 'card',
                    title: 'Integration Card',
                    type: 'object',
                    fields: [
                        // UPGRADED TO ADVANCED TEXT
                        defineField({
                            name: 'title',
                            title: 'Integration Name',
                            type: 'advancedText',
                        }),
                        // UPGRADED TO ADVANCED TEXT
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'advancedText',
                        }),
                        defineField({
                            name: 'logo',
                            title: 'Logo',
                            type: 'image',
                        }),
                        defineField({
                            name: 'tags',
                            title: 'Tags (e.g., SUPPORT, IMPORT)',
                            type: 'array',
                            of: [{ type: 'string' }],
                            options: {
                                layout: 'tags',
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            // Updated to look inside the advanced text object
                            title: 'title.text',
                            media: 'logo',
                            subtitle: 'description.text',
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Integration Directory',
                subtitle: 'Directory Block (Sidebar & Cards)',
            };
        },
    },
});