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
  ],
};
