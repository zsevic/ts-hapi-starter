import * as hapi from '@hapi/hapi';
import { Custom } from 'domain/entities/custom';
import { getCustomList } from 'domain/use_cases/getCustomList';

export function getCustomListHandler(request: hapi.Request, h: hapi.ResponseToolkit):
Promise<Custom[]> {
  return getCustomList();
}
