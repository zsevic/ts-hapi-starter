module.exports = [
  {
    name: 'migration',
    type: 'sqlite',
    database: 'database.sqlite',
    entities: ['src/gateways/database/entities/*{.js,.ts}'],
    migrations: ['database/migrations/*{.js,.ts}'],
    migrationsTableName: 'migrations',
    cli: {
      migrationsDir: 'database/migrations',
    },
    logging: true,
    synchronize: true,
  },
  {
    name: 'seed',
    type: 'sqlite',
    database: 'database.sqlite',
    entities: ['src/gateways/database/entities/*{.js,.ts}'],
    migrations: ['database/seeders/*{.js,.ts}'],
    migrationsTableName: 'seeders',
    cli: {
      migrationsDir: 'database/seeders',
    },
    logging: true,
    synchronize: true,
  },
];
