import supertest from 'supertest';

import app from '../../app';
import models from '../../models';

import testDB from '../../../test/test-db';

const db = testDB(models.mongoose);

describe('ItemController', () => {
  beforeAll(() => db.connect());
  afterAll(() => db.disconnect());

  describe('GET /item', () => {
    describe('when it runs', () => {
      let response: supertest.Response;

      beforeAll(async () => {
        await models.ItemModel.insertMany([
          {
            name: 'test-name-1',
            reference: 'test-reference-1',
            description: 'test-description-1',
            value: 100,
          },
          {
            name: 'test-name-2',
            reference: 'test-reference-2',
            description: 'test-description-2',
            value: 200,
          },
        ]);

        response = await supertest(app)
          .get('/item');
      });

      afterAll(() => models.ItemModel.deleteMany({}));

      it('should response 200 status code', () => {
        expect(response.statusCode).toBe(200);
      });

      it('should response formatted items', () => {
        expect(response.body.length).toBe(2);
        expect(response.body[0].name).toBe('test-name-1');
        expect(response.body[0].description).toBe('test-description-1');
        expect(response.body[0].value).toBe(100);
        expect(response.body[1].name).toBe('test-name-2');
        expect(response.body[1].description).toBe('test-description-2');
        expect(response.body[1].value).toBe(200);
      });
    });
  });

  describe('POST /item', () => {
    describe('when it runs', () => {
      let response: supertest.Response;

      beforeAll(async () => {
        response = await supertest(app)
          .post('/item')
          .send({
            name: 'test-name',
            reference: 'test-reference',
            description: 'test-description',
            value: 100,
          });
      });

      afterAll(() => models.ItemModel.deleteMany({}));

      it('should response 200 status code', () => {
        expect(response.statusCode).toBe(200);
      });

      it('should response the item', () => {
        expect(response.body.name).toBe('test-name');
        expect(response.body.reference).toBe('test-reference');
        expect(response.body.description).toBe('test-description');
        expect(response.body.value).toBe(100);
        expect(typeof response.body.createdAt).toBe('string');
        expect(typeof response.body.updatedAt).toBe('string');
      });

      it('should create the item', async () => {
        const item = await models.ItemModel.findOne();
        expect(item?.name).toBe('test-name');
        expect(item?.reference).toBe('test-reference');
        expect(item?.description).toBe('test-description');
        expect(item?.value).toBe(100);
      });
    });

    describe('when it fails', () => {
      let response: supertest.Response;

      beforeAll(async () => {
        response = await supertest(app)
          .post('/item')
          .send({
            name: 1234,
            reference: 'test-reference',
            description: 'test-description',
            value: 100,
          });
      });

      it('should response 422 status code', () => {
        expect(response.statusCode).toBe(422);
      });

      it('should response an error', () => {
        expect(response.body.error).toBe('ValidationError');
        expect(response.body.message).toBe('"name" must be a string');
        expect(response.body.statusCode).toBe(422);
      });
    });
  });
});
