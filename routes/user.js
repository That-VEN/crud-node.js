const express = require('express');
const router = express.Router();
const {db} = require('../database');

router.get('/' , (req,res)=>{
    let  sql = "SELECT * FROM users";
    db.query(sql, (error,result)=>{
        if(error) {
            return console.log(error);
            
        }
        res.send(result);

    });
});

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    let  sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], (error,result)=>{
        if(error){
            return console.log(error)} 
        res.send(result)
    });
});


router.post('/', (req, res) =>{
    let users = req.body;
    let sql = "INSERT INTO student (first_name, last_name, age) values ? ";
    let userObj = [
      [
        users.first_name,
        users.last_name,
        users.age
  
      ]
    ]
    db.query(sql, [userObj], (error) => {
      if (error) return console.log(error);
      
      res.send({message: "Inserted successfully!"});
      
    })
  });


  router.put("/:id", (req, res) => {
    let id = req.params.id;
    let users = req.body;
    let sql =
      "UPDATE student SET first_name = ?, last_name = ?, age = ? where id = ? ";
    let userObj = [users.first_name, users.last_name, users.age, parseInt(id)];
    db.query(sql, userObj, (error) => {
      if (error) return console.log(error);
  
      res.send({ message: "Update successfully!" });
    });
  });


  router.delete('/:id', (req, res) =>{
    let id = req.params.id;
    let sql = "delete from student where id = ? ";
    db.query(sql, [id], (error, result) => {
      if (error) return console.log(error);
      
      res.send(result);
      
    })
  });

module.exports = router;