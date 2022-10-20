const router = require("express").Router();
const { User } = require("../models/Users");
const Joi = require('joi');
const bcrypt = require("bcrypt")

router.post("/", async(req,res) => {
    try {
        //IF ERROR, SEND ERROR MESSAGE
        const {error} = validate(req.body)
        if (error)
            return res.status(400).json({message: error.details[0].message})

        //IF USER IS NOT FOUND, SEND ERROR MESSAGE
        const user = await User.findOne({email: req.body.email})
        if (!user)
            return res.status(401).json({message: "Invalid Email or Password!"})

        //IF PASSWORD IS NOT MATCH, SEND ERROR MESSAGE
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword)
            return res.status(401).json({message: "Invalid Email or Password!"})

        const token = user.generateAuthToken()
        res.status(200).json({data: user, token})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error!!!"})
    }

})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = router;