export default {
  widgets: [
   
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635d65fd802d900fa83e7624',
                  title: 'Sanity Studio',
                  name: 'tm3000 studio',
                  apiId: 'e9d70f76-b9a4-4c64-9f70-2335b253ff4b'
                },
                {
                  buildHookId: '635d663a39c8fc135ecc9ca3',
                  title: 'tm3000',
                  name: 'tm3000',
                  apiId: '63e3ddbb-e514-4dcb-8e1b-160bc92941b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-svelte-kit-tm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tm3000.se', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
