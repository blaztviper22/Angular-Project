const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

 //middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

 //port
 const PORT = process.env.PORT || 8081;

 //server
 app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
 });

// testing api
app.get('/', (req,res)=>{
    res.json({message: 'hello from api'})
});