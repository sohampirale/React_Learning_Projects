import express from "express"
import cors from "cors"
import React from "react";
import ReactDOMServer from "react-dom/server";
import Card from "./Card.jsx";
const app=express();

app.use(express.json())
app.use(cors())

app.get("/home",(req,res)=>{
    console.log('inside /home');

    res.status(200).json({
        data:"Data of HOME FROM  BACKEND"
    })
})

app.get("/about",(req,res)=>{
    console.log('inside /about');
    res.status(200).json({
        data:"Data of ABOUT FROM BACKEND"
    })
})

app.get("/card",(req,res)=>{
    console.log("Inside /card");
    const html = ReactDOMServer.renderToStaticMarkup(<Card title="This title is gievn my backend"/>);
    res.send("<!DOCTYPE html>" + html);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})