import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://ornnapa2759:boardgame1234@cluster0.l8rkot4.mongodb.net/'

    mongoose
        .connect(connectionUrl,configOptions)
        .then(() => console.log("Ecommerce database connected successfully!"))
        .catch((err) =>
            console.log('Getting Error from DB connection ${err.message}')
        );
};

export default connectToDB;