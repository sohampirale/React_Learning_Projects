import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDom from 'react-dom/client'
let count =0;

const TestingCompo=()=>{
  console.log('Hey i am called by someone '+count++);  
  return (
    <div>Thank you for calling me</div>
  )
}

const HTML=<div>Hi from HTML</div>;
const TestingComp2=(
  <>
  <a href="https://google.com" target='_blank'>Visit Google</a>
  <div>hey there</div>
  </>
)

const createdElem=React.createElement('input',{
  type:"password",
  placeholder:"Enter username"
});

console.log('Created Elem = '+JSON.stringify(createdElem) );

createRoot(document.getElementById('root')).render(
  createdElem
)
