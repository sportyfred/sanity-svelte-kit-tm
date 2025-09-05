import {UserIcon} from '@sanity/icons'

export default {
  name: 'author',
  type: 'document',
  icon: UserIcon,
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Address of this author in the website',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: "Author's photo",
      options: {
        hotspot: true
      },
      // Images can have extra fields to annotate the image with supporting content
     
    },{
      name: 'studier',
      title: 'Studier',
      type: 'table', // Specify 'table' type
    },

      {
      name: 'utstallningar',
      title: 'Utställningar',
      type: 'table', // Specify 'table' type
    },

      {
      name: 'publikationer',
      title: 'Publikationer',
      type: 'table', // Specify 'table' type
    },

      {
      name: 'stipendier',
      title: 'Stipendier',
      type: 'table', // Specify 'table' type
    },
  {
      name: 'bio',
      type: 'PortableText',
      title: 'Biography'
    },
    
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
