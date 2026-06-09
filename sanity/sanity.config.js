import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {googleMapsInput} from '@sanity/google-maps-input';

import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'cbtherapy',
  projectId: 'njbf7cxc',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY,
      defaultZoom: 11,
      defaultLocation: {
        lat: 40.7058254,
        lng: -74.1180863,
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
