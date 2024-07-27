import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the Notification interface extending Document
 export interface notification extends Document {
  state: string;
  id: string;
  sender: string;
  receiver: string;
  time: Date;
}

// Define the schema for the Notification model
const notificationSchema = new Schema<notification>({
  state: { type: String, required: true },
  id: { type: String, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  time: { type: Date, required: true }
});



const Notification = (mongoose.models.Warehouse as mongoose.Model<notification>) ||  mongoose.model('Notification', notificationSchema);
export default Notification;
