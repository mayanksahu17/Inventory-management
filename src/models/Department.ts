import mongoose , {Document , Schema} from "mongoose";

interface department extends Document {
    name: string;
    email: string;
    password : string;
    notification : any;
    Role : 'dept';
    location : string;
}

const DepartmentSchema : Schema<department> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notification: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
  Role: { type: String },
  location: { type: String},
});

const Department = (mongoose.models.Department as mongoose.Model<department> ) ||   mongoose.model('Department', DepartmentSchema);

 export default Department