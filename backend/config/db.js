const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDb;
