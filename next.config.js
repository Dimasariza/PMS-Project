const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/PMS-Project',
        destination: '/PMS-Project/batera/dashboards/tasks',
        permanent: true
      }
    ];
  },
};

module.exports = withImages(redirects);
