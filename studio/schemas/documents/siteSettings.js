

import ColorPicker from 'sanity-plugin-color-picker/lib'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
     {
      name: 'image',
      type: 'image',
      title: "Site image",
      options: {
        hotspot: true
      }},
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
 title: "Background color",
  name: "colorpickerbg",
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
},
{
 title: "Text color",
  name: "colorpickertext",
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
},
{
 title: "Link color",
  name: "colorpickerlink",
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
},
{
 title: "Link color focus",
  name: "colorpickerlinkalt",
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
},
{
 title: "Table header color",
  name: "colorpickersecondarycolor",
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
  ]
}
