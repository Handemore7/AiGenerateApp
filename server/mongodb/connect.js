import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log('Error connecting to MongoBD: ' + err))
}

export default connectDB