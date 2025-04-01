const express = require('express');
const app = express();
// const {db} = require('./database');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, ()=>{ console.log("server is running port");
});

app.get('/' , (req,res)=>{
    res.send("HEllo world")
});
 

const usersRouter = require("./routes/user");
app.use('/users',usersRouter);
