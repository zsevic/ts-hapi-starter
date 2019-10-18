import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:database.sqlite', {
  dialect: 'sqlite',
});
// TODO: migrations
sequelize.sync();
