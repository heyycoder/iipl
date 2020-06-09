
function extraruns(deliveries,matches){

  var ans={};
  var arr=["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]
 for(var k=0;k<arr.length;k++)
 {
   var result={};
  for(var i=0;i<matches.length;i++)
  {
   if(matches[i].season==arr[k])
   {
     for(var j=0;j<deliveries.length;j++)
     {
       if(deliveries[j].match_id==matches[i].id)
       {
       if(result[deliveries[j].bowling_team])
       {
        result[deliveries[j].bowling_team]= result[deliveries[j].bowling_team]+parseInt(deliveries[j].extra_runs);
       }
       else
       {
          result[deliveries[j].bowling_team]=parseInt(deliveries[j].extra_runs);
      }
     }
    }
  }
   }
   ans[arr[k]]=result;
  } 
    // console.log(result);
  return ans;
}
module.exports=extraruns;