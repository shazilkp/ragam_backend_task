const express= require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const JWT_SECRET= "03a1085727efcfb91c734893b4caca428fec5ff306c4ba89445a11e2d20cf1e4"

/*
router.get('/',async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

*/

router.post('/register', async (req,res) =>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.post('/login', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message : 'Credential Not found'})
        }

        const verified = await bcrypt.compare(password, user.password)
        if(!verified){
            return res.status(401).json({message : 'Invalid Credential'})
        }

        const jwt_token = jwt.sign({id:user._id, email: user.email},JWT_SECRET, {expiresIn: '1h'});
        res.json({jwt_token});


    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

/*
router.delete('', async (req,res) => {
    try {
        await User.deleteMany({})
        res.json({message: 'Deleted book'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

*/
module.exports = router