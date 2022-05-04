import Models from '../../models';
import { IItem } from '../../models/item';

class ItemService {
  private ItemModel: typeof Models.ItemModel;

  constructor(models: typeof Models) {
    this.ItemModel = models.ItemModel;
  }

  public get() {
    return this.ItemModel.find().exec();
  }

  public create(match: IItem) {
    return this.ItemModel.create(match);
  }
}

export default ItemService;
