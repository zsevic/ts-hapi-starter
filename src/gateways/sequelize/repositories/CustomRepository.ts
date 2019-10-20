/* eslint-disable class-methods-use-this */
import { Custom } from 'domain/entities/Custom';
import CustomModel from 'gateways/sequelize/models/CustomModel';

export class CustomRepository {
  async getCustomList(): Promise<Custom[]> {
    return CustomModel.findAll({});
  }
}
