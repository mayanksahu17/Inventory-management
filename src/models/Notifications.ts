import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the Notification interface extending Document
export interface notification extends Document {
  id: string;
  sender: string;
  time: Date;
  message: string;
  mode: string;
  acceptedBy: string;
  isAccepted: boolean;
  quantity : Number;
}

// Define the schema for the Notification model
const notificationSchema = new Schema<notification>({
  sender: { type: String, required: true },
  time: { type: Date, default: Date.now },
  message: { type: String, required: true },
  mode: { type: String,  required: true }, // Define   allowed modes
  acceptedBy: { type: String },
  isAccepted: { type: Boolean, default: false },
  quantity: {type: Number , required : true} 
});

notificationSchema.index({ createdAt: -1 }); // Index for efficient querying

const Notification = (mongoose.models.Notification as mongoose.Model<notification>) || mongoose.model('Notification', notificationSchema);
export default Notification;
