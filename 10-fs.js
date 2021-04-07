//const fs=require("fs");

const  {readFileSync, writeFileSync, write}=require("fs");

const  first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/res.txt',`Result: ${first},${second}`,{flag:'a'});

const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error');
    }
    console.log(result);
})