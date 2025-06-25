import mongoose from "mongoose"

async function connectDB(setDBConnected){
    const uri=import.meta.env.VITE_MONGODB_URI
    console.log('uri = '+uri);
    
    try {
        await mongoose.connect(uri+'/reactAppn')
        console.log('DB Connected Successfully');
        setDBConnected(true)
    } catch (error) {
        console.log('DB Connection failed');
        console.log(JSON.stringify(error));
        setDBConnected(false)
    }
}

export default connectDB;