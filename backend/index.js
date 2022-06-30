const express = require('express');
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");


const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

//connect database
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql Connected...')
});

//create database
app.get('/createdb', (req, res)=>{
    let sql = `CREATE DATABASE nodemysql`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    })
});

//create table
app.get('/createpoststable', (req, res)=>{
    let sql = 'CREATE TABLE post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post table created...')
    })
})

//insert Post
app.get('/addpost1', (req, res)=>{
    let post = {title: 'Post one',body: 'This is post number one'};
    let sql = 'INSERT INTO post SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

app.listen(8080, ()=>{
    console.log('server started on port 8080...')
});