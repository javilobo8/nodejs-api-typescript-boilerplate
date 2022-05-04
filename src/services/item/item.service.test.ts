import ItemService from './item.service';

import testDB from '../../../test/test-db';
import models from '../../models';
import { IItem } from '../../models/item';

const db = testDB(models.mongoose);

describe('ItemService', () => {
  beforeAll(() => db.connect());
  afterAll(() => db.disconnect());

  const itemService = new ItemService(models);

  describe('get', () => {
    const baseItem: IItem = {
      name: 'test-name',
      reference: 'test-reference',
      description: 'test-description',
      value: 100,
    };

    beforeAll(async () => {
      await models.ItemModel.create(baseItem);
    });

    afterAll(() => models.ItemModel.deleteMany({}));

    it('should return all the documents', async () => {
      const result = await itemService.get();
      expect(result[0].name).toBe(baseItem.name);
      expect(result[0].reference).toBe(baseItem.reference);
      expect(result[0].description).toBe(baseItem.description);
      expect(result[0].value).toBe(baseItem.value);
      expect(result[0].createdAt instanceof Date).toBe(true);
      expect(result[0].updatedAt instanceof Date).toBe(true);
    });
  });

  describe('create', () => {
    const baseItem: IItem = {
      name: 'test-name',
      reference: 'test-reference',
      description: 'test-description',
      value: 100,
    };

    afterAll(() => models.ItemModel.deleteMany({}));

    it('should return the created document', async () => {
      const result = await itemService.create(baseItem);
      expect(result.name).toBe(baseItem.name);
      expect(result.reference).toBe(baseItem.reference);
      expect(result.description).toBe(baseItem.description);
      expect(result.value).toBe(baseItem.value);
      expect(result.createdAt instanceof Date).toBe(true);
      expect(result.updatedAt instanceof Date).toBe(true);
    });
  });
});
