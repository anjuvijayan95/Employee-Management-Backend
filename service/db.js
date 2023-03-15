const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems')

const Employee=mongoose.model('Employee',
        {
            id:String,
            uname:String,
            age:String,
            desg:String,
            salary:String,
            image:String,
            mail:String,
            mobile:String


        })

module.exports={Employee}