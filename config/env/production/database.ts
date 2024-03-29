export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '0.0.0.0'),
      port: env.int('PGPORT'),
      database: env('PGDATABASE', 'strapi'),
      user: env('PGUSER', 'strapi'),
      password: env('PGPASSWORD', 'strapi'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});