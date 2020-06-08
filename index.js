const express = require('express');
const fs = require("fs");
const csv=require('csvtojson');
const matchesplayedperyear=require('./ipl/matchesplayedperyear');
const matcheswonbyteam=require('./ipl/matcheswonbyteam');
const extraruns=require('./ipl/extraruns');
const economical=require('./ipl/economical');
const winnigteampervenue=require('./ipl/winnigteampervenue');
const Matches_File_Path="./csv_data/matches.csv";
const Deliveries_File_Path="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE = "./public/dataa.json";
const JSON_out="./public/dataaa.json";
const Dataa=require("./public/dataa.json");
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded());
function main(){
    csv()
    .fromFile(Matches_File_Path)
    .then((matches)=>{
      csv()
       .fromFile(Deliveries_File_Path)
       .then((deliveries)=>{
          // let result5=finalone(deliveries,matches);
          let result4=winnigteampervenue(deliveries,matches);
          let result3=economical(deliveries,matches);
          let result2=extraruns(deliveries,matches);
          let result=matchesplayedperyear(matches);
          let result1=matcheswonbyteam(matches);
          savematchesplayedperyear(result,result1,result2,result3,result4);
       });
    });
}
function savematchesplayedperyear(result,result1,result2,result3,result4,result5) {
    const jsonData = {
      // finalone:result5,
      matchesplayedperyear: result,
      matcheswonbyteam:result1,
      extraruns:result2,
      economical:result3,
      winnigteampervenue:result4
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
main();
var finalans={arlkjdsd:"sabndasd"};
app.get('/create',function(req,res){
  // console.log(req.query);
  var year=req.query.year;
  console.log(year);
   finalans=(Dataa["extraruns"][year]);
   console.log(finalans);
   res.send(finalans);
})
app.listen(8080,function(err){
  if(err)
  {
    return 
  }
  console.log('server is up');
  return;
})
// const express=require('express');
// const app=express();
// app.get('/',function(req,res){
//     res.send("hgkjl")
// })
// app.listen(2020,function(err){
//     if(err)
//     {
//         console.log('err');
//         return;
//     }
//     console.log('server is up');
// })
