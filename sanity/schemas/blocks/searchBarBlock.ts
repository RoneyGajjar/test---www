import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'searchBarBlock',
    title: 'Search Bar',
    type: 'object',
    fields: [
        defineField({ name: 'placeholder', type: 'string', title: 'Placeholder Text', initialValue: 'Search...' }),
        defineField({
            name: 'maxWidth',
            title: 'Max Width',
            type: 'string',
            options: { list: ['max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl'] },
            initialValue: 'max-w-2xl'
        })
    ],
});