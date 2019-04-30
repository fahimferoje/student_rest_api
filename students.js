let express = require('express');
let router = express.Router();

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mySchema"
  });

async function getAllStudentsInfo(req, res){
    connection.query("SELECT * FROM STUDENT_INFO", (err, result, fields) => {
        if(err){
            throw err;
        }

        res.send(result);
    });
}

async function getStudentInfoById(req, res){

    connection.query(`SELECT * FROM STUDENT_INFO WHERE ID = ?`, [req.params.id], (err, result, fields) => {

        if(err){
            throw err;
        }

        res.send(result);
    });
}

router.get('/', getAllStudentsInfo);
router.get('/:id/student', getStudentInfoById);

module.exports = router;