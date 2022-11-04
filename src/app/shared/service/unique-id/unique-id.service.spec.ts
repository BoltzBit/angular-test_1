import { UniqueIdService } from "./unique-id.service";

let service: UniqueIdService = new UniqueIdService();

beforeEach(() => {
    service = new UniqueIdService();
});

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const id = service.generatedUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
        // const firstId = service.generatedUniqueIdWithPrefix('app-');
        // const secondId = service.generatedUniqueIdWithPrefix('app-');

        // expect(firstId).not.toBe(secondId);

        const ids = new Set();

        for(let i = 0; i < 50; i++){
            ids.add(service.generatedUniqueIdWithPrefix('app-'));
        }

        expect(ids.size).toBe(50);
    });

    it(`#numberOfGeneratedUniqueId should return the number of generatedIds when called`, () => {
        service.generatedUniqueIdWithPrefix('app-');
        service.generatedUniqueIdWithPrefix('app-');

        expect(service.numberOfGeneratedUniqueId).toBe(2);
    });
});
