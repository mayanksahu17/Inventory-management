import mongoose, { Document  , Schema } from "mongoose";
import {notification} from './Notifications'

interface Warehouse extends Document {
  name: string;
  email: string;
  password: string;
  warehouseId: string;
  department: string;
  location: string;
  notification:[{ type: Schema.Types.ObjectId, ref: 'Notification' }];
}

const WarehouseSchema : Schema<Warehouse> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  warehouseId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  notification: [{ type: Schema.Types.ObjectId, ref: 'Notification' }]
});



const Warehouse = (mongoose.models.Warehouse as mongoose.Model<Warehouse>) ||  mongoose.model('Warehouse', WarehouseSchema);