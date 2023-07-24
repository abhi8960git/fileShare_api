import mongoose ,{Document} from "mongoose";
const Schema:any = mongoose.Schema;

const FileSchema = new Schema({
   filename:{
    type:String,
    required:true
   },
   secure_url:{
    type:String,
    required:true
   },
   sizeInBytes:{
    type:String,
    required:true
   },
   sender:{
    type:String,

   },
   receiver:{
    type:String
   },
},
{
    timestamps:true
}
);

interface IFile extends Document{
    filename:string;
    secure_url:string;
    sizeInBytes:string;
    format:string;
    sender?:string;
    receiver?:string;
}
 const File =  mongoose.model<IFile>("File", FileSchema);

export default File;




