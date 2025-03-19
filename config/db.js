const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://mnavaneeth7:scyQ6NswRjhwdniU@cluster0.5mhre.mongodb.net/express-signup');
        console.log('MongoDB connected successfully');
    } catch(err) {
        console.log('MongoDB connection failed');
    }
}

module.exports = connectDB;