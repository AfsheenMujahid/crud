import { client } from "./server.mjs";

export const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("Connection to MongoDB successful");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    console.log("MongoDB not connected");
  }
};
