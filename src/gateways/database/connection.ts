import { createConnection } from 'typeorm';
export const connectionName = 'database';

createConnection({
  name: 'database',
  type: 'sqlite',
  database: process.env.DATABASE_URL || 'database.sqlite',
  entities: ['src/gateways/database/entities/*{.js,.ts}'],
  migrations: ['database/migrations/*{.js,.ts}'],
  logging: true,
  synchronize: true,
}).then(() => {
  console.log('Connection with database is established');
}).catch(e => {
  console.error(e);
})
