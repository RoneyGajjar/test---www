import { defineField, defineType } from 'sanity';

// Reusable list options to keep the code clean
const marginOptions = [
    { title: '0', value: '0' },
    { title: '4', value: '4' },
    { title: '8', value: '8' },
    { title: '12', value: '12' },
    { title: '16', value: '16' },
    { title: '24', value: '24' },
    { title: '32', value: '32' }
];

export default defineType({
    name: 'featuredBanner',
    title: 'Featured Banner',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading Configuration',
            type: 'advancedText',
        }),
        defineField({
            name: 'description',
            title: 'Description Configuration',
            type: 'advancedText',
        }),

        // --- 1. LEFT COLUMN MARGIN ---
        defineField({
            name: 'leftColumnMargin',
            title: 'Left Column Margin',
            type: 'object',
            options: { columns: 2 },
            fields: [
                defineField({
                    name: 'top',
                    title: 'Top',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mt-${opt.value}` })) },
                }),
                defineField({
                    name: 'bottom',
                    title: 'Bottom',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mb-${opt.value}` })) },
                }),
                defineField({
                    name: 'left',
                    title: 'Left',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `ml-${opt.value}` })) },
                }),
                defineField({
                    name: 'right',
                    title: 'Right',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mr-${opt.value}` })) },
                }),
            ],
        }),

        // --- 2. RIGHT COLUMN MARGIN ---
        defineField({
            name: 'rightColumnMargin',
            title: 'Right Column Margin',
            type: 'object',
            options: { columns: 2 },
            fields: [
                defineField({
                    name: 'top',
                    title: 'Top',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mt-${opt.value}` })) },
                }),
                defineField({
                    name: 'bottom',
                    title: 'Bottom',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mb-${opt.value}` })) },
                }),
                defineField({
                    name: 'left',
                    title: 'Left',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `ml-${opt.value}` })) },
                }),
                defineField({
                    name: 'right',
                    title: 'Right',
                    type: 'string',
                    options: { list: marginOptions.map(opt => ({ title: opt.title, value: `mr-${opt.value}` })) },
                }),
            ],
        }),

        defineField({
            name: 'image',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color (Hex)',
            type: 'string',
        }),
        defineField({
            name: 'manualImageWidth',
            title: 'Manual Image Width (Override)',
            description: 'Type an exact size (e.g., "400px", "75%"). Overrides the scale dropdown.',
            type: 'string',
        }),
        defineField({
            name: 'manualImageHeight',
            title: 'Manual Image Height (Override)',
            description: 'Type an exact size (e.g., "300px", "50vh").',
            type: 'string',
        }),
        defineField({
            name: 'imageFit',
            title: 'Image Fit',
            type: 'string',
            options: {
                list: [
                    { title: 'Cover (Fills space, might crop)', value: 'object-cover' },
                    { title: 'Contain (Shows full image, preserves aspect ratio)', value: 'object-contain' },
                    { title: 'Fill (Stretches to fill space, ignores aspect ratio)', value: 'object-fill' },
                    { title: 'None (Original size, no scaling)', value: 'object-none' },
                ],
            },
            initialValue: 'object-cover',
        }),
        defineField({
            name: 'objectPosition',
            title: 'Object Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Top', value: 'object-top' },
                    { title: 'Bottom', value: 'object-bottom' },
                    { title: 'Left', value: 'object-left' },
                    { title: 'Right', value: 'object-right' },
                    { title: 'Center', value: 'object-center' },
                ],
            },
            initialValue: 'object-center',
        }),
    ],
    preview: {
        select: {
            title: 'heading.text',
            media: 'image',
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title || 'Untitled Featured Banner',
                media: media,
                subtitle: 'Featured Banner Block',
            };
        },
    },
});