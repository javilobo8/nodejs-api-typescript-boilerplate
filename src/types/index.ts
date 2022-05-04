import mongoose from 'mongoose';

export type ObjectId = mongoose.Types.ObjectId | string;

declare global {
  var __MONGO_URI__: string;
}

export {};