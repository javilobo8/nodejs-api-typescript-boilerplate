import express from 'express';
import { IServices } from '../../services';
import { formatItems } from './item.controller.formatters';

class AccountController {
  private services: IServices;

  constructor(services: IServices) {
    this.services = services;
  }

  public async getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const items = await this.services.item.get();
      const formattedItems = formatItems(items);
      res.send(formattedItems);
    } catch (error: any) {
      next(error);
    }
  }

  public async create(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const item = await this.services.item.create(req.body);
      res.send(item);
    } catch (error: any) {
      next(error);
    }
  }
}

export default AccountController;
