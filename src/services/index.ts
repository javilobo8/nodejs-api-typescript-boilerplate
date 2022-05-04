import models from '../models';
import ItemService from './item/item.service';

export interface IServices {
  item: ItemService,
}

const services: IServices = {
  item: new ItemService(models),
};

export default services;