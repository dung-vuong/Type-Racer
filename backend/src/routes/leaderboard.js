const router = require("express").Router();
const { Gamemode } = require("../models/Gamemode");
const { Stats } = require("../models/Stats");

router.post("/", async(req,res) => {

    // Parameter check

    var gamemode, results;

    //IF RESULTS FOUND
    if(req.query.results == null){
        results = 10;
    }
    else{
        results = req.query.results;
    }

    //IF GAMEMODE FOUND
    if(req.query.gamemode == null){
        // insert error here

    }
    else{
        gamemode = req.query.gamemode;
    }


    



    res.send("test");

})

module.exports = router;