/**
 * A set of functions called "actions" for `mail`
 */

 const emailTemplate = {
  subject: 'Prośba o kontakt od <%= data.name %>',
  text: `Nowa prośba o kontakt`,
  html: `<h1>Nowa prośba o kontakt od <%= data.name %></h1>
    <p>Dane kontaktowe:<p>
    <a href="tel:<%= data.phone %>">Telefon: <%= data.phone %></a>
    <a href="mailto:<%= data.email %>>Email: <%= data.email %></a>
    `,
};

// subject: 'Prośba o kontakt od <%= data.name %>',
// test: `test`,
// html: `<h1>Nowa prośba o kontakt od <%= data.name %></h1>
//   <p>Dane kontaktowe:<p>
//   <a href="tel:<%= data.phone %>">Telefon: <%= data.phone %></a>
//   <a href="mailto:<%= data.email %>>Email: <%= data.email %></a>
//   `,

export default {
  contact: async (ctx) => {
    try {
      
      const { email, phone, name } = JSON.parse(ctx.request.body)
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'shadooowpl@gmail.com',
          // from: is not specified, the defaultFrom is used.
        },
          emailTemplate,
        {
          data: { email, phone, name }
        }
      );
      ctx.body = 'ok';
    } catch (err) {
      ctx.send({message: 'Something went wrong when sending an e-mail.'}, 400)
    }
  }
};
