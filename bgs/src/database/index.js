import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://paphawarinfocus:KcFDCjBSzC9HEHSb@cluster0.x8ucdl7.mongodb.net/'

    mongoose
        .connect(connectionUrl, configOptions)
        .then(() => console.log("Ecommerce database connected successfully!"))
        .catch((err) =>
            console.log(`Getting Error from DB connection ${err.message}`)
        );
};

export default connectToDB;
