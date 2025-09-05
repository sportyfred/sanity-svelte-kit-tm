export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Excerpt',
  of: [
    {
      type: 'block',
      title: 'Block',
       styles: [
        {title: 'Normal', value: 'normal'},
         {title: 'Small', value: 'small'},
          {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      {
  name: 'soundcloud',
  type: 'object',
  title: 'SoundCloud Embed',
  fields: [
    {
      name: 'soundcloudurl',
      type: 'url',
      title: 'Soundcloud URL'
    }
  ]
},
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'}
        ],
            annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
              
            ]
          }
          
          
          
        ]
      }
    }
  ]
}
