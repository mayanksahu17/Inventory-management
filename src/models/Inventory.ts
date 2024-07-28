import mongoose, { Document  , Schema } from "mongoose";
import {notification} from './Notifications'
import Item from "./Item";
import { item } from "./Item";

interface inventory extends Document {
  name: string;
  item : [item];
  location : String;
  quantity : Number;
  department : String;
}



const inventorySchema : Schema<inventory> = new Schema({
  name : {  type : String},
  item: [{ type:  Schema.Types.ObjectId, ref: 'Item' }],
  location : {type : String},
  quantity : {type : String},   
  department : {type : String},
});



const Inventory = (mongoose.models.Inventory as mongoose.Model<inventory>) ||  mongoose.model('Inventory', inventorySchema);

export  { Inventory}