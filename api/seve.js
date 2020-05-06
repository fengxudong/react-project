const express = require("express");
const bodyParser = require("body-parser")
const db =require("./module/db2")
const tools = require("./module/tools")
const app = express();
app.use(bodyParser.json());
app.post("/regg",async (req,res)=>{
    try{
      const {userId,userPassword} = req.body
      console.log(req.body)
      await   db.insertOne("userList",{
        userId,
        userPassword,
        addTime:Date.now()
         });
         tools.json(res,1,"添加成功")
    }catch(err){
      tools.json(
        tools.json(res,-1,err)
      )
    }
});

app.listen(80,()=>{
    console.log("成功");
})
