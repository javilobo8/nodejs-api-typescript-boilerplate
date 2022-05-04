import express from 'express';
import ItemController from './item';

export default function buildControllers(app: express.Application) {
  ItemController(app);
}
