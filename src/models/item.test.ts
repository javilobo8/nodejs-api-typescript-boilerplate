import testDB from '../../test/test-db';
import models from './index';

const db = testDB(models.mongoose);

describe('ItemModel', () => {
  beforeAll(() => db.connect());
  afterAll(() => db.disconnect());

  describe('when create a new item', () => {
    afterAll(() => models.ItemModel.deleteMany({}));

    describe('with all data', () => {
      it('should save all data', async () => {
        const account = await new models.ItemModel({
          name: 'test-name',
          reference: 'test-reference',
          description: 'test-description',
          value: 100,
        }).save();

        expect(account.name).toBe('test-name');
        expect(account.reference).toBe('test-reference');
        expect(account.description).toBe('test-description');
        expect(account.value).toBe(100);
      });
    });
  });
});