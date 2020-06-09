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
const JSON_OUTPUT_FILE = "./dataa.json";
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
          savematchesplayedperyear(result,result1,result3,result4);
          save(result2)
       });
    });
}
function savematchesplayedperyear(result,result1,result3,result4) {
    const jsonData = {
      matchesplayedperyear: result,
      matcheswonbyteam:result1,
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
  
function save(result2) {
  const jsonData = {
    extraruns:result2
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main();