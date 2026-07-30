export default {
  routes: [
    {
      method: 'PUT',
      path: '/newsletter-subscribers/:documentId/server-update',
      handler: 'api::newsletter-subscriber.newsletter-subscriber.serverUpdate',
      config: {
        auth: false,
      },
    },
  ],
};
