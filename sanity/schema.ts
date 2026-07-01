import { type SchemaTypeDefinition } from 'sanity';
import page from './documents/page';
import hero from './schemas/blocks/hero';
import buttonBlock from './schemas/blocks/buttonBlock';
import searchBarBlock from './schemas/blocks/searchBarBlock';
import advancedText from './schemas/blocks/advancedText';
import featuredBanner from './schemas/blocks/featuredBanner';
import integrationDirectory from './schemas/blocks/integrationDirectory';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        page,
        hero,
        buttonBlock,
        searchBarBlock,
        advancedText,
        featuredBanner,
        integrationDirectory,
    ],
};