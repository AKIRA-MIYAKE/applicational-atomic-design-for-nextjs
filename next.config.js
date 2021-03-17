module.exports = {
  async redirects() {
    return [
      {
        source: '/tasks',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
