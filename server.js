const express=require('express');
const app=express();
const Dataa=require("./dataa.json");
app.use(express.static('public'));
app.use(express.urlencoded());


var finalans={arlkjdsd:"sabndasd"};
app.get('/create',function(req,res){
  // console.log(req.query);
  var year=req.query.year;
  // console.log(year);
   finalans=(Dataa["extraruns"][year]);
  //  console.log(finalans);
   res.send(finalans);
})
const port=process.env.PORT || 8080;
app.listen(port,function(err){
  if(err)
  {
    return 
  }
  console.log('server is up');
  return;
})
