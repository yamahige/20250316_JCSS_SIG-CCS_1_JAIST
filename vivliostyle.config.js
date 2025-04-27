module.exports = {
  language: 'ja',
  // theme: 'ieej-tech.css',
  author: '山口 琢',
  entry: [
    'slide.md'
  ],
  output: [
    'slide.pdf',
    {
      path: './slide',
      format: 'webpub',
    },
  ]
};