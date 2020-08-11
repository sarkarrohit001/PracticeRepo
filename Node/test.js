
/*let http = require("http");

let ourApp = http.createServer(function(request, response){

  if(request.url == "/")
  {
    response.end("Hello!! Welcome to our site...");  
  }
  if(request.url == "/about")
  {
      response.end("Thank you we are a small team working remotely and trying to learn new things :)")
  }

  response.end("Can't find what you are looking for .... Please try again!");

});
ourApp.listen(3000);
*/


let express = require("express");
const { request } = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({extended: false}));

ourApp.get('/', function(req,res){

  res.send(`
  <form action="/answer" method="POST">
  <p> What Color is the sky on sunny morning? </p>
  <input name="skyColor" autocomplete="off">
  <button>Submit</button>
  </form>
  `);

});

ourApp.post('/answer', function(req,res){
//res.send("Thank you for submitting the form!");
if(req.body.skyColor.toUpperCase() =="BLUE"){
  res.send(`
  That's Correct :) You rock!!!
  <a href="/">Back to Home</a>`);
}
else{

  res.send(`Oops thats incorrect!
  <a href="/">Back to Home</a>`);

}
});


ourApp.get('/answer', function(req,res){
  res.send("Nothing to see here! please go to the right address!!");
  });



ourApp.listen(3000);

