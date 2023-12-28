import mongoose from "mongoose";

const connectionDb = async () => {
  const connectionUrl = process.env.MONGO_URL;

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to Blog DB!"))
    .catch((error) =>
      console.log(`Getting error from db connection; ${error.message}`)
    );
};

export default connectionDb;
