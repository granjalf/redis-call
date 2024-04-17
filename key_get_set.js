var redis = require('redis');
var client = redis.createClient();

client.connect();

// Handle connection errors
client.on("error", function(error) {
    console.error("Error connecting to Redis:", error);
  });
  
  // Open connection to Redis
  client.on("connect", function() {
    console.log("Connected to Redis server");
    client.mSet('header',1,'left',2,'article',3,'right',4,'footer',5).then(console.log('seteó'));
  });

  
  client.mGet(['header','left','article','right','footer']).then((res)=>{
    console.log(res);
  });   

  
  setTimeout(function() {
    client.quit();
  }, 10000);
/*
client.connect().then(console.log('conectó'));
client.set('header',2,'left',0,'article',0,'right',0,'footer',0).then('setteó');
*/
/*
client.get(['header','left','article','right','footer'], 
  function(err, value) {
    console.log(value);
}).then(console.log("corrió"));
*/
/*
client.connect().then(()=>{
    console.log('connected');
    //single value write & read
    client.set("my_key", "Hello world!");
    client.get("my_key").then((err,reply)=>{console.log(reply)});
});
*/

/*
client.on('connect', () => {
    //single value write & read
    console.log('connected');
    client.set("my_key", "Hello world!");
    client.mGet("juan").then((reply)=>{ console.log(reply)});
});
*/
/*
client.connect().then(() =>{
    //single value write & read
    client.set("my_key", "Hello world!");
    client.get("my_key", function(err,reply){
        console.log(reply);
})
});
*/

/*
//single value write & read
client.set("my_key", "Hello world!");
client.get("my_key", function(err,reply){
    console.log(reply);
})
*/
  //client.disconnect();