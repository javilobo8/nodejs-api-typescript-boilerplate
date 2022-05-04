import mongoose, { Document, Schema } from 'mongoose';

const collectionName = 'items';

export interface IItem {
  name: string;
  reference: string;
  description: string;
  value: number;
}

export interface IItemDocument extends IItem, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema: Schema = new Schema({
  name: { type: String },
  reference: { type: String, index: true },
  description: { type: String },
  value: { type: Number, },
}, { timestamps: true, versionKey: false });

export default mongoose.model<IItemDocument>(collectionName, ItemSchema, collectionName);