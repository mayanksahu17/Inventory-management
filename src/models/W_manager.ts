import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the WarehouseDetails interface extending Document
interface warehouseManager extends Document {
  email: string;
  password : string;
  location: string;
  name: string;
  items: mongoose.Types.ObjectId[]; // Array of ObjectId references to the Item model
}

// Define the schema for the WarehouseDetails model
const warehouseDetailsSchema = new Schema<warehouseManager>({
  email : {type : String , required : true , unique:true},
  password : {type : String , required : true},
  location: { type: String, required: true },
  name: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});


const WarehouseManager = (mongoose.models.WarehouseManager as mongoose.Model<warehouseManager>) ||  mongoose.model('WarehouseManager', warehouseDetailsSchema);


export default WarehouseManager;
