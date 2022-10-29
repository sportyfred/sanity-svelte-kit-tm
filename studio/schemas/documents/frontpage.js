

import ColorPicker from 'sanity-plugin-color-picker/lib'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    
    {
  title: "Color List",
  description: "Pick a color",
  name: "colors",
  type: "colorlist", // required
  options: {
    list: [
      { title: "Red", value: "#f16d70" },
      { title: "Teal", value: "#88c6db" },
      { title: "Purple", value: "#aca0cc" },
      { title: "Green", value: "#bdcdcb" },
      { title: "White", value: "white" }
    ]
  }
},
{
 title: "Color Picker",
  name: "colorpicker",
  type: "string",
  inputComponent: ColorPicker,
  options: {
    list: [
      { title: "Yellow", value: "#f5c701" },
      { title: "Pink", value: "#f6cedb" },
      { title: "Red", value: "#f16d70" },
      { title: "Teal", value: "#88c6db" },
      { title: "Purple", value: "#aca0cc" },
      { title: "Green", value: "#bdcdcb" },
      { title: "White", value: "#fff" }
    ]
  }
}
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
