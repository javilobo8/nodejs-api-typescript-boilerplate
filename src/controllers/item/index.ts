import express from 'express';

import ItemController from './item.controller';
import services from '../../services';
import * as validations from './item.controller.validations';
import httpRequestBodyValidation from '../../middlewares/http-request-body-validation';

export default function bindController(app: express.Application) {
  const itemController = new ItemController(services);
  const router = express.Router();

  router.get(
    '/',
    itemController.getAll.bind(itemController),
  );

  router.post(
    '/',
    httpRequestBodyValidation(validations.createItemBodySchema),
    itemController.create.bind(itemController),
  );

  app.use('/item', router);
}
