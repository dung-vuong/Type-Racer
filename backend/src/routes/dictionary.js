const router = require("express").Router();
const { Gamemode } = require("../models/Gamemode");
const { Stats } = require("../models/Stats");
const dictionaryModel = require('../models/Dictionary');


router.get("/getDictionaryWords", async(req,res) => {

    // Parameter check
    var dictName, wordCount;

    //IF Dictionary Name FOUND
    if(req.query.dictionaryName == null){
        // error here
    }
    else{
        dictName = req.query.dictionaryName;
    }

    //IF WordCount FOUND
    if(req.query.wordCount == null){
        wordCount = 200
    }
    else{
        wordCount = req.query.wordCount;
    }


    dictionaryModel.find({ dictionaryName: dictName}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            let words = []; // words result of find function

            //console.log(docs);
            //console.log(docs[0].allWords);
            const wordsList = docs[0].allWords;
            //console.log(wordsList);
            var letterCount = 0;
            for(let i = 0; i < wordCount; i++){
                var index = Math.round(Math.random() * (wordsList.length-1));
                letterCount += wordsList[index].length;
                words.push(wordsList[index]);
            }

            res.send({letterCount, words});
        }
    });





    //res.send("test");

        

})


router.get("/getDictionariesFromUser", async(req,res) => {

    // Parameter check
    var userID;

    //IF RESULTS FOUND
    if(req.query.userID == null){
        userID = 10;
    }
    else{
        userID = req.query.userID;
    }

    //var result = []; // result of find function

    dictionaryModel.find({ createdBy: userID}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            let result = []; // result of find function

            for(let i = 0; i < docs.length; i++){
                console.log(docs[i].dictionaryName);
                result.push(docs[i].dictionaryName);
              }
            console.log(result);
            res.send(result);
        }
    });

    //res.send("error");
})


router.post("/uploadDictionary", async(req,res) => {
    const numWords = req.body.numWords;
    const data = req.body;

    const newDict = new dictionaryModel(data);

    await newDict.save();
    res.send("dictionary upload successful");
})
module.exports = router;