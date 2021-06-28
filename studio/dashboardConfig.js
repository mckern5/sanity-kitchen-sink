export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60da0f50d3c1ad1a24237f28',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-53dwnvro',
                  apiId: '9231197f-373b-4c90-8708-03ab8324c437'
                },
                {
                  buildHookId: '60da0f5067e7c819169b3d51',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2asj5fr4',
                  apiId: '667344b8-c6f7-4f3c-ace4-7eeb7d3e39a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mckern5/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2asj5fr4.netlify.app', category: 'apps'}
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
