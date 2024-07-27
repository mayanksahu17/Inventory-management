import mongoose , {Document , Schema} from "mongoose";

interface admin extends Document {
    name: string;
    email: string;
    password : string;
    notification : any;
    Role : 'admin';
}

const AdminSchema : Schema<admin> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notification: [{ type: Schema.Types.ObjectId, ref: 'Notification' }]
});

const Admin = (mongoose.models.Admin as mongoose.Model<admin> ) ||   mongoose.model('Admin', AdminSchema);

 export default Admin;