var {customers} = require('../models/Customer.js');


const createNewCustomer = (req, res) =>{
    const {customerId,name,address,phoneNumber} = req.body;
    const cust = new customers(customerId,name,address,phoneNumber);
    // console.log('customerReqData', customerReqData);
    cust.createNewCustomer((result) => {
        res.send(result);
    })

};

const updateCustomer =(req,res) =>{
    const {customerId,name,address,phoneNumber} = req.body;
    const cust = new customers(customerId,name,address,phoneNumber);
    cust.setName(name);
    cust.setPhoneNumber(phoneNumber);
    cust.setAddress(address);
    cust.updateCustomer((result) =>{
        res.send(result);
    })
};

const deleteCustomer = (req,res)=>{
    
    const customerId = req.params.customerId;
   
    const cust = new customers(customerId);
    cust.setCustomerId(customerId);
    cust.deleteCustomer((result)=>{
        res.send(result);
    })
};

const getCustomer = (req,res)=>{
    const cust = new customers();
    cust.getCustomer((result)=>{
        res.send(result);
    })

}

module.exports = {
    createNewCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer
}
