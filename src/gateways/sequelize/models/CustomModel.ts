import { Model, DataTypes } from 'sequelize';
import { Custom } from 'domain/entities/custom';
import { sequelize } from 'gateways/sequelize/connection';

class CustomModel extends Model implements Custom {
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
