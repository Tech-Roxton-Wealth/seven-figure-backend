/**
 * lead router — server create (bypasses users-permissions; validates STRAPI_API_TOKEN)
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/leads/server-create',
      handler: 'api::lead.lead.serverCreate',
      config: {
        auth: false,
      },
    },
  ],
};
