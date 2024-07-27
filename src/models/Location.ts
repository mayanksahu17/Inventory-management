import mongoose, { Document, Model, Schema } from 'mongoose';

interface ILocation extends Document {
  deviceId: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

const LocationSchema: Schema = new Schema({
  deviceId: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, required: true },
});

const Location: Model<ILocation> = mongoose.models.Location || mongoose.model('Location', LocationSchema);

export default Location;
