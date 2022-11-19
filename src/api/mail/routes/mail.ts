export default {
  routes: [
    {
     method: 'POST',
     path: '/mail/contact',
     handler: 'mail.contact',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/mail/message',
      handler: 'mail.message',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
