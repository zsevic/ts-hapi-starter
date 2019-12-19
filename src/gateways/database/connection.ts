import { createConnection } from 'typeorm';
import ormConfig from 'root/ormconfig.json';

createConnection({
  ...ormConfig,
  type: 'sqlite',
  database: process.env.DATABASE_URL || 'database.sqlite',
}).then(() => {
  console.log('Connection with database is established');
});