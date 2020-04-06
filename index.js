const express=require('express')
const app=express()
const PORT=3000
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoose=require('mongoose');
var db = 'mongodb://localhost:27017/Inventory_mongodb'
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false}) 
 .then(() => console.log('MongoDB Connected'))  
 .catch(err => console.log(err));
 var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully");
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
//Importing the routes in the main js file
let apiRoutes = require("./api")
app.use('/api', apiRoutes)
//HTML form for adding a new product into the inventory system
app.get('/add_product.html',(req, res)=>{      
	res.sendFile( __dirname + "/" + "add_product.html")
})