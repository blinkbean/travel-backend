export default {
  routes: [
    {
      method: 'GET',
      path: '/notices/list',
      handler: 'notice.list',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/notices/latest',
      handler: 'notice.latest',
      config: {
        auth: false,
      },
    },
  ],
};
