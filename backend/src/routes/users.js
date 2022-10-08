const router = require("express").Router();
const {User, validate} = require("../models/Users")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        //IF ERROR FOUND, RETURN ERROR MESSAGE
        const {error} = validate(req.body)
        if (error)
            return res.status(400).send({message: error.details[0].message})

        //IF NO ERROR, FIND THE USER BY EMAIL --- IF USER FOUND, RETURN ERROR MESSAGE
        const user = await User.findOne({email: req.body.email})
        if (user)
            return res.status(409).send({message: "User with given email already exists!"})

        //IF NO ERRORS, HASH THE PASSWORD FOR SECURITY REASON
        const salt = await bcrypt.genSalt(Number(10))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        //CREATE THE USER AFTER HASHED PASSWORD
        await new User({...req.body, password: hashPassword}).save()
        res.status(201).send({message: "User created successfully!"})

    } catch (error) {
        res.status(500).send({message: "Internal Server Error!!!"})
    }
})

module.exports = router;