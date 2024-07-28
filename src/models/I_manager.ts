import mongoose, { Document, Schema, Model } from 'mongoose';
import {notification} from './Notifications';
import { string } from 'yup';
// Define the inventoryDetails interface extending Document
interface inventoryManager extends Document {
  email: string;
  password : string;
  location: string;
  name: string;
  items: mongoose.Types.ObjectId[];
  notifications :[any];
  department : any
 }

// Define the schema for the inventoryDetails model
const inventoryDetailsSchema = new Schema<inventoryManager>({
  email : {type : String , required : true , unique:true},
  password : {type : String , required : true},
  location: { type: String, required: true },
  name: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  notifications : [{type : Schema.Types.ObjectId , ref : 'Notification'}],
  department : {type : String }
});


const InventoryManager = (mongoose.models.InventoryManager as mongoose.Model<inventoryManager>) ||  mongoose.model('InventoryManager', inventoryDetailsSchema);


export default InventoryManager;
