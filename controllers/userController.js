const User = require("../model/userModel");

const signup = async (req,res) => {
    try{
        const { username, email, password,} = req.body;

        if(username){
            res.status(400).send("Username cannot be empty");
        }

        if(email){
            res.status(400).send( "Email cannot be empty");
        }

        if(password.length <8 , password.length >16){
            res.status(400).send("Password length should be greater than 8 or less than or equal to 16");
        } 


        const user = new User({
            username,email,password
        })

        await user.save();
        res.status(200).send("User created success");
    } catch(err){
        res.status(500).send(err);
    }
}

module.exports = { signup };