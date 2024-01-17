import mongoose from "mongoose";
async function connection()
{
   return await mongoose.connect('mongodb+srv://devendra:Papa123123@Cluster0.x8vg2cf.mongodb.net/?retryWrites=true&w=majority',{
   })
}
export default connection;