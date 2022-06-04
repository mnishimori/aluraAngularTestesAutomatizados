import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  const service = new UniqueIdService();

  beforeEach(() => {
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id).toContain('app-');
  });
});
