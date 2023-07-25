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
