import { Custom } from 'domain/entities/Custom';
import { getCustomList } from 'domain/use_cases/getCustomList';

export function getCustomListHandler():
Promise<Custom[]> {
  return getCustomList();
}
