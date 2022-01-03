

const bodyParser = require("body-parser");
const express = require('express')
const cors = require('cors')
const {deleteCustomer,createNewCustomer,updateCustomer,getCustomer} = require('./controllers/customerController.js')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}


//middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json());



//testing api
app.post('/create', createNewCustomer);
app.put('/update',updateCustomer);
app.delete('/delete/:customerId',deleteCustomer);
app.get('/get',getCustomer);
app.get('/', (req,res) => {
    res.json({message: 'hello from api'})
})

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`)
})

  