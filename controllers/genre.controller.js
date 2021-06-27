var express = require('express');
const{genres}=require("../models");
const db = require("../models");
const Genre = db.genres;

async function findAllGenres(req,res){
    const data= await db.genres.find({});
    //console.log(data);
    res.json({ genres : data});
}

module.exports={
    findAllGenres
} 