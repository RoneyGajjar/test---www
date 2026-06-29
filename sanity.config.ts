import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schema';

export default defineConfig({
    name: 'default',
    title: 'Page Builder Studio',
    projectId: '39g9tayz',
    dataset: 'production',
    basePath: '/studio',
    plugins: [structureTool()],
    schema: {
        types: schema.types,
    },
});