export const localBlogs = [
  {
    id: 1,
    slug: 'mock-local-blog',
    title: { rendered: 'Initial Local Blog' },
    excerpt: { rendered: '<p>A local mock excerpt to keep the layout intact.</p>' },
    content: { rendered: '<p>Content for local blog.</p>' },
    date: new Date().toISOString(),
    _embedded: {
      'wp:featuredmedia': [{ source_url: '/images/localized/adu_asset_52dc4cc0e2.jpg' }],
      'wp:term': [[{ name: 'ADU Guide' }]],
      'author': [{ name: 'ADU Alliance Technical Team' }]
    }
  }
];