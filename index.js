const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;
app.get('/',(req,res)=>{
    res.send("**********************");
})

const userRoutes = require('./src/routes/user.route').default;
app.use('/user',userRoutes);
app.listen(port,()=>{
    console.log(`Server is Running on port : ${port}`);
})