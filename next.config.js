module.exports = {
  reactStrictMode: true,
images: {
    domains: [
'dl.airtable.com',
 'avatars.githubusercontent.com',
 'camo.githubusercontent.com',
'www.datocms-assets.com',
      'acegif.com'
 ],
  },
  async redirects() {
    return [
      {
        source: '/engineering-jobs',
  destination: '/jobs/t/engineering',
   permanent: true,
      },
      {
        source: '/product-jobs',
  destination: '/jobs/t/product',
        permanent: true,
      },
      {
        source: '/sales-jobs',
