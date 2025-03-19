const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.use('/', require("./routes/userRoutes"));

app.listen(3000, async (req,res) => {
    try{
        await connectDB();
        console.log('MongoDB connected');
    } catch(err){
        console.log(err.message)
    }
});

console.log("Server running on 3000");