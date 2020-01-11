import { createConnection } from 'typeorm';
import database from 'config/database';
import ormConfig from 'root/ormconfig';

export const connectionName = process.env.NODE_ENV !== 'test' ? 'database' : 'test';

if (connectionName !== 'test') {
  const config = ormConfig.find((c) => c.name === connectionName);
  createConnection({ ...config, database: database.URL }).then(() => {
    console.log('Connection with database is established');
  });
}
