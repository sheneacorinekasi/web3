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
,
      {
        source: '/sales-jobs',
        destination: '/jobs/t/sales',
 permanent: true,
      },
      {
        source: '/marketing-jobs',
 destination: '/jobs/t/marketing',
 permanent: true,
      },
      {
        source: '/people-jobs',
  destination: '/jobs/t/people',
permanent: true,
      },
      {
        source: '/operations-jobs',
