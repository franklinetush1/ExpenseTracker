
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User", userSchema)

//routes routes
exports.loginFunc = async (req,res)=>{
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        console.log(user)
        res.json({status: 'ok', user:true})
    }
    else{
        res.json({status: 'error', user: false})
    }
};

exports.registerFunc = async (req,res)=>{

    try {
        console.log(req.body) 
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })      
        
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }   

};