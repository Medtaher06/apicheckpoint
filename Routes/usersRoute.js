import express from "express";
import UsersModel from "../Models/userModel"
import UserSchema from '../Models/userModel';
const usersRoute = express.Router();




usersRoute.post('/new', async(req, res)  =>{
    
  
        let listOfUsers = req.body.listOfUsers;
     
        listOfUsers.forEach((user)=>{
           
           let newUser = UserSchema(user);
         

 newUser.save();

        });
        


        let allUsers = await  UsersModel.find();
        
       
       
        res.status(200).json(allUsers);
})

usersRoute.get('/', async (req, res)  =>{

  let allUsers = await  UsersModel.findOne({ age : 20});
 if(allUsers != null && allUsers.length > 0){
    res.status(200).json(allUsers);
 } else {
     res.send('no user found')
 }
  
})


export default usersRoute ;
