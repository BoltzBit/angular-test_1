import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueIdService();
        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id).toContain('app-');
    });
});
