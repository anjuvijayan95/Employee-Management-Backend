 const db=require('./db')
 const getEmployees=()=>{
    return db.Employee.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }else{
            return{
                statusCode:404,
                message:'No such data present'
            }
        }
    })
}

const addEmployee=(id,uname,age,desg,salary,mobile,mail,image)=>{
    return db.Employee.findOne({mobile})
    .then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'This employee already exist'
            }
        }else{
            const newEmp=new db.Employee({
                id,
                uname,
                age,
                desg,
                salary,
                mobile,
                mail,
                image,

            })
            newEmp.save()
            return{
                statusCode:200,
                message:'employee added'
            }
        }
    })
}


const getAnEmployee=(id)=>{
    return db.Employee.findOne({id})
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }else{
            return{
                statusCode:404,
                message:'No employee in database'
            }
        }
    })
}

const updateEmployee=(id,uname,age,desg,salary,mobile,mail,image)=>{
    return db.Employee.findOne({id})
    .then((result)=>{
        if(result){
                result.id=id,
                result.uname=uname,
                result.age=age,
                result.desg=desg,
                result.salary=salary,
                result.image=image,
                result.mail=mail,
                result.mobile=mobile

                result.save()
                return{
                    statusCode:200,
                    message:'Data updated succesfully'
                }
        }else{
            return{
                statusCode:404,
                message:'There is no such employee in database'
            }
        }
    })
}


const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id})
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Employee removed from data base'
            }
        }else{
            return{
                statusCode:404,
                message:'No employee exist in this id'
            }
        }
    })
}

module.exports={getEmployees,addEmployee,deleteEmployee,getAnEmployee,updateEmployee}