var redis = require('redis');
const client = redis.createClient();

client.connect();

function data(){
  return new Promise((resolve, reject) => {
      client.mGet(['header','left','article','right','footer'], 
          function(err, value) {
              const data = {
                  'header':  Number(value[0]),
                  'left':    Number(value[1]),
                  'article': Number(value[2]),
                  'right':   Number(value[3]),
                  'footer':  Number(value[4])
              };
              err ? reject(null) : resolve(data);
          }
      );
  });    
}

data().then((result)=>{
  console.log(result);
  client.quit();
});