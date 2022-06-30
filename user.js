const express = reqiure('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/signup', (req,res)=>{
    let user = req.body;
    query = "select email,password,role,status from user where email=?"
    connection.query(query,[user.email], (err, results)=>{
        if(!err) {
            if(results.length <=0) {
                query = "insert into user(name,contactNumber,email,password,status,role) value(?,?,?,?,'false','user')";
                connection.query(query, [user.name,user.contactNumber,user.email,user.password,], (err,result)=>{
                    if(!err) {
                        return res.status(200).json({message: 'successfully registered'});
                    } else {
                        return res.status(500).json(err);
                    }
                })
            } else {
                return res.status(400).json({message: 'Email already exist'});
            }
        } else {
            return res.status(500).json(err);
        }
    })
})

router.post('/login',(req,res)=>{
    const user = req.body;
    query = "select email,password,role,status from user where email=?";
    connection.query(query, [user.email],(err, result)=>{
        if(!err) {
            if(result.length <=0 || result[0].password != user.password) {
                return res.status(401).json({message: "Incorrect Username or password"});
            }
            else if(result[0].status === 'false') {
                return res.status(401).json({message: "Wait for Admin approval"});
            }
            else if(result[0].password === user.password) {
                const respond = {email: result[0].email, role: result[0].role};
                const accesstoken = jwt.sign(respond, process.env.ACCESS_TOKEN, { expiresIn: '8h'});
                res.status(200).json({ token: accesstoken})
            }
            else {
                return res.status(400).json({message: "Something went wrong plese try again later"});
            }
        } else {
            return res.status(500).json(err);
        }
    })
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

router.post('/forgotpassword',(req,res)=>{
    const user = req.body;
    query = 'select email,password from user where email=?';
    connection.query(query,[user.email],(err,result)=>{
        if(!err) {
            if(result.length <=0) {
                return res.status(200).json({message: "Password sent successfully"});
            } else {
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: result[0].email,
                    suubject: 'Password by Cafe Management System',
                    html: '<p><b>Your Login details for Cafe Management System</b><br><b>Email:</b>'+result[0].email+'<br><b>Password:</b>'+result[0].password+'<br><a href="http://localhost:4200">Click here to login!</a></p>'
                };
                transporter.sendMail(mailOptions,(error,info)=>{
                    if(error) {
                        console.log(error);
                    } else {
                        console.log('Email sent:'+info.response);
                    }
                });
                return res.status(200).json({message: 'Password sent successfully to your email.'})
            }
        }
    })
})

module.exports = router;