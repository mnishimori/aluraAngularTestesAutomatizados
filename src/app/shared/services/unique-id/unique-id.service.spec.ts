import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  const service = new UniqueIdService();

  beforeEach(() => {
  });

  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id).toContain('app-');
  });
});
