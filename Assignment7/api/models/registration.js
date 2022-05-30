const mongoose = require('mongoose');
const registrationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    } ,
    address:{
        type: String,
        required: true,
    }, 
    city:{
        type: String,
        required: true,
    }, 
    state:{
        type: String,
        required: true,
    }, 
    zip:{
        type: Number,
        required: true,
    }, 
    age:{
        type: String,
        required: true,
    }, 
    consent:{
        type: Boolean,
        required: true,
    }, 
    bio:{
        type: String,
        required: true,
    }, 
    password:{
        type: String,
        required: true,
    }
    

})

module.exports = mongoose.model("Registration", registrationSchema)