const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const Registration = require('../api/models/registration');


const postRegister = async (req)=>{
    const salt = await bcrypt.genSalt(10);
        let password = req.body.password
    password = await bcrypt.hash(password,salt);
       
    const register = new Registration({
    _id: mongoose.Types.ObjectId(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                age: req.body.age,
                gender: req.body.gender,
                consent: req.body.consent,
                bio: req.body.bio,
                password: password,
});

return await register.save();

};
module.exports = postRegister;