// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import homepage from './homepage';
import about from './about';
import contact from './contact';
import ourServices from './ourServices';
import resources from './resources';
import faq from './faq';
import generalBlogPage from './generalBlogPage';
import generalGalleryPage from './generalGalleryPage';
import blogPost from './blogPost';

import imageBlock from './imageBlock';
import responseArt from './responseArt';
import ctaBanner from './ctaBanner';

import genericContentBlock from './genericContentBlock';
import contentBlockArray from './contentBlockArray';
import metaContent from './metaContent';
import blogCategory from './blogCategory';

import generalSite from './generalSite';
import socialMediaLink from './socialMediaLink';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    about,
    contact,
    ourServices,
    resources,
    faq,
    generalBlogPage,
    generalGalleryPage,
    blogPost,
    responseArt,
    ctaBanner,
    imageBlock,
    genericContentBlock,
    contentBlockArray,
    blogCategory,
    metaContent,
    generalSite,
    socialMediaLink,
  ]),
});
