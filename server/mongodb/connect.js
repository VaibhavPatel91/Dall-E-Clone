import mongoose from "mongoose";

const connectDB = (url) => {
    // When strict mode is enabled, attempting to query on fields not defined in the schema will result in an error. This helps ensure that only valid fields are used in queries, providing better control over data integrity and preventing unexpected behavior.
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('failed to connect with mongo');
        console.error(err);
      });
};

export default connectDB;