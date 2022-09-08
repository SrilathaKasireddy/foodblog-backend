import express from "express";
import { getAllItems, getItemById, deleteItemById, updateItemById, createNewItems } 
from "./itemHelper.js";
const router =express.Router();

router.get('/', async function (request, response) {
    
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    const items= await getAllItems(request);
    response.send(items);
    })
  
  router.get('/:id', async function (req, res) {
  const {id} = req.params;
  console.log("id is : ", id);
        
  const item= await getItemById(id);
  console.log(item);
  movie?res.send(item):res.status(404).send({msg:"item not found"});
    })
  
    router.delete('/:id', async function (req, res) {
      const {id} = req.params;
            
      const result= await deleteItemById(id);
      result.deletedCount>0?res.send({msg:"item deleted successfully"}):
      res.status(404).send({msg:"item not found"});
        })
  
  router.put('/:id', async function (req, res) {
    const {id} = req.params;
    const data=req.body;
          
    const result= await updateItemById(id, data);
    res.send(result);
      })
  
  // express.json() is a inbuilt middleware to convert data inside body to json format.
  router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data)
    
    //db.movies.insertMany(data);
    const result=await createNewItems(data);
      res.send(result);
      console.log(result)
    })

    export const itemsRouter=router;
  