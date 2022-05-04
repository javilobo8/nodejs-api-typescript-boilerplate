import { IItemDocument } from '../../models/item';
import { IResponseItem } from './item.controller.interfaces';

export function formatItems(items: IItemDocument[]): IResponseItem[] {
  return items.map((item) => ({
    name: item.name,
    description: item.description,
    value: item.value,
  }))
}