import mongoose , {Document , Schema} from "mongoose";

interface supplier extends Document {
    name: string;
    email: string;
    password : string;
    notification : any;
    Role : 'dept';
    location : string;
}

const cupplier : Schema<supplier> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notification: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
  Role: { type: String },
  location: { type: String},
});

const Supplier = (mongoose.models.Department as mongoose.Model<supplier> ) ||   mongoose.model('Supplier', cupplier);

 export default Supplier