// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import homepage from './homepage';
import about from './about';

import responseArt from './responseArt';
import ctaBanner from './ctaBanner';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([homepage, about, responseArt, ctaBanner]),
});
