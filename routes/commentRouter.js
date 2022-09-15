import express from "express";
import { getAllComments, getCommentById, 
  deleteCommentById, updateCommentById,
   createNewComments } from 
"./Helper.js";
import Auth from "../Middleware/auth.js";


const router =express.Router();


router.get('/', async function
 (request, response) {
    
    
    const comments= await getAllComments(request);
    response.send(comments);
    })
  
  router.get('/:id', async function (req, res) {
  const {id} = req.params;
  console.log("id is : ", id);
        
  const item= await getCommentById(id);
  console.log(item);
  item?res.send(item):res.status(404).send({msg:"item not found"});
    })
  
    router.delete('/:id',async function (req, res) {
      const {id} = req.params;
            
      const result= await deleteCommentById(id);
      result.deletedCount>0?res.send({msg:"item deleted successfully"}):
      res.status(404).send({msg:"item not found"});
        })
  
  router.put('/:id', async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          
    const result= await updateCommentById(id, data);
    res.send(result);
      })
  
  
  router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data)  
    const result=await createNewComments(data);
      res.send(result);
      console.log(result)
    })

    export const commentsRouter=router;
  