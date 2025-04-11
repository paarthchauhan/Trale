import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    console.log("Connecting to MongoDB with:", process.env.MONGODB_URL); // 👈 debug line

    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;

