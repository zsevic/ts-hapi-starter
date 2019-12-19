import { createConnection } from 'typeorm';

createConnection({
  type: 'sqlite',
  database: process.env.DATABASE_URL || 'database.sqlite',
  entities: ['src/gateways/database/entities/*{.js,.ts}'],
  synchronize: true,
  logging: true,
}).then(() => {
  console.log('Connection with database is established');
});