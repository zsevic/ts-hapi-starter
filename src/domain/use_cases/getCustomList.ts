import { Custom } from 'domain/entities/Custom';
import { customRepository } from 'gateways';

export async function getCustomList(): Promise<Custom[]> {
  return customRepository.getCustomList();
}
