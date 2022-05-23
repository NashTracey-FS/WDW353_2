//fixed fs variable
const fs = require('fs')

//fixed module name
var http = require('http');
//fixed variable
var myname="Here is my IP address";

function callHttpbi() {
  let promise = new Promise((resolve) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      //fixed variable
      let myips = result.origin;
      //added variable to method
      resolve(myips)
     });
     }
    );
    
    let result = await promise;
    return result;
});


//fixed console log
console.log(result);
}

async function executeAsyncTask(){
  const valueA = await callHttpbin();
  const valueB = myname;
  console.log(valueB+" "+valueA)
 //added closing bracket 
}
//calling async function
executeAsyncTask();