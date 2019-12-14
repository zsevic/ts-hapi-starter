import { Model, DataTypes } from 'sequelize';
import { Custom } from 'domain/entities/Custom';
import { sequelize } from 'gateways/database/connection';

class CustomModel extends Model implements Custom {
  public id!: string;

  public name!: string;
}

CustomModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'customs',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default CustomModel;
