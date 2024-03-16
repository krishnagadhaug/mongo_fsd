const express = require('express');
const studentModel = require('../model/studentmodel');
const router =express.Router();

router.use(express.json());


router.get('/',async(req,res)=>{
   try{

     const data =await studentModel.find()
    res.send(data);
   }catch(error){
        console.log(error)
    }
})


// route to add data
router.post('/add',async(req,res)=>{
try{
     var item =req.body;
     await studentModel(item).save();
     res.send("data added")
}catch(error){
        console.log(error)
}
})
 //route to do udpate
 router.put('/edit/:id',async(req,res)=>{
     try{
          const id = req.params.id;
          const item = req.body;
          await studentModel.findByIdAndUpdate(id,item)
          res.send("date updated")
     }catch(error){
          console.log(error);
     }
 })

 //route to delete
 router.delete('/delete/:id',async(req,res)=>{
     try{
          const id = req.params.id;
          await studentModel.findByIdAndDelete(id);
          res.send("deleted")
     }catch(error){
          console.log(error);
     }
 })




module.exports= router;