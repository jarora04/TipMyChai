import mongoose from "mongoose";

const connectDB = async () => {
try{
    const conn = await mongoose.connect("mongodb+srv://ajatinarora38:123@cluster0.mq02bkp.mongodb.net/tea",{ useNewUrlParser: true,  
    });
    console.log(`mongo connected : {conn.connection.host}`);
}
catch(error){
    console.error(error.message);
    process.exit(1);
}
}

export default connectDB;