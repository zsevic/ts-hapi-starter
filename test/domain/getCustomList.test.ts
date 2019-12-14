import { getCustomList } from 'domain/use_cases/getCustomList';
import { customRepository } from 'gateways';

jest.mock('gateways');
const mockGetCustomList = customRepository.getCustomList as jest.Mock;

describe('Get custom list', (): void => {
  it('should get custom list', async (): Promise<void> => {
    const customs = [{ id: 'id', name: 'custom1' }];
    mockGetCustomList.mockResolvedValue(customs);

    const customList = await getCustomList();

    expect(customList).toEqual(customs);
  });
});
