const client = require("./client");

async function init()
{
  await client.set('msg:6',"Hey from nodejs")
  // await client.expire("msg:6" , 10);
  const res= await client.get('msg:6');
  console.log("Result->", res);
}

init();