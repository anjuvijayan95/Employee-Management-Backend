const express = require('express')
const cors = require('cors')
const logics = require('./service/logic')








const server=express()

server.listen(8000,()=>{
    console.log('EMS server started at 8000');
})

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())


server.get('/get-employees',(req,res)=>{
    logics.getEmployees()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/add-employees',(req,res)=>{
    logics.addEmployee(
        req.body.idEmp,
        req.body.unameEmp,
        req.body.ageEmp,
        req.body.desgEmp,
        req.body.salaryEmp,
        req.body.mobileEmp,
        req.body.mailEmp,
        req.body.imageEmp)
        
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/get-an-employee/:id',(req,res)=>{
    logics.getAnEmployee(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/get-an-employee/:id',(req,res)=>{
    logics.getAnEmployee(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/delete-employees/:id',(req,res)=>{
    logics.deleteEmployee(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/update-employees',(req,res)=>{
    logics.updateEmployee(
        req.body.idEmp,
        req.body.unameEmp,
        req.body.ageEmp,
        req.body.desgEmp,
        req.body.salaryEmp,
        req.body.imageEmp,
        req.body.mailEmp,
        req.body.mobileEmp
        )
        
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})