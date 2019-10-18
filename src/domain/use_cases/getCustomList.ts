import { Custom } from 'domain/entities/custom';
import { customRepository } from 'gateways';

export async function getCustomList(): Promise<Custom[]> {
  return customRepository.getCustomList();
}
