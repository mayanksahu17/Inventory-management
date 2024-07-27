import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the inventoryDetails interface extending Document
interface inventoryManager extends Document {
  email: string;
  password : string;
  location: string;
  name: string;
  items: mongoose.Types.ObjectId[]; // Array of ObjectId references to the Item model
}

// Define the schema for the inventoryDetails model
const inventoryDetailsSchema = new Schema<inventoryManager>({
  email : {type : String , required : true , unique:true},
  password : {type : String , required : true},
  location: { type: String, required: true },
  name: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});


const InventoryManager = (mongoose.models.InventoryManager as mongoose.Model<inventoryManager>) ||  mongoose.model('InventoryManager', inventoryDetailsSchema);


export default InventoryManager;
