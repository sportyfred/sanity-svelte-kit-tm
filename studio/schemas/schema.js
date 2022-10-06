// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import FionaPlaceholder from 'part:sanity-plugin-asset-source/fiona-placeholder'

import ColorPicker from 'sanity-color-picker/lib'



// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'

import siteSettings from './documents/siteSettings'

import frontpage from './documents/frontpage'

// Object types
import portableText from './objects/portableText'
import authorReference from './objects/authorReference'
import youtube from './objects/youtube'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    category,
    author,
    frontpage,
    siteSettings,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    portableText,
    authorReference,
youtube,
  ])
})
