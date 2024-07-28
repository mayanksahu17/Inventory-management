import mongoose, { Document, Schema, Model } from "mongoose";

// Define the Item interface extending Document
export interface item extends Document {
  name: string;
  category: string;
  expiryDate: Date;
  quantity: number;
  minQuantity: number;
  type : String
}

const itemSchema = new Schema<item>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  minQuantity: { type: Number, required: true },
  type: { type: String, required: true }
});

// Create the Item model
const Item =( mongoose.models.Item as mongoose.Model<item>) || mongoose.model('Item', itemSchema);

export default Item;
