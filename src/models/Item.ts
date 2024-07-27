import mongoose, { Document, Schema, Model } from "mongoose";

// Define the Item interface extending Document
interface Item extends Document {
  name: string;
  category: string;
  expiryDate: Date;
  department: string;
  quantity: number;
  receiver: string;
  minQuantity: number;
}

// Define the schema for the Item model
const itemSchema = new Schema<Item>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  department: { type: String, required: true },
  quantity: { type: Number, required: true },
  receiver: { type: String, required: true },
  minQuantity: { type: Number, required: true }
});

// Create the Item model
const Item =( mongoose.models.Item as mongoose.Model<Item>) || mongoose.model('Item', itemSchema);

export default Item;
