const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    }, 
    name:{
        type: String,
        required: true,
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    },
    membership_type:{
        type: String,
        enum: ['Regular', 'Premium'],
        default:'Regular'
    },
    registered_date:{
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save' ,async function (next){
    if (!this.isModified('password')){
        return next();
    }
    
    //const salt = bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,10);
    next();
})



module.exports = mongoose.model('User', userSchema)