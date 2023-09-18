const express=require("express");
const router=express.Router();

// Import Controller 

const {createTodo}=require("../controllers/createTodo");
const {getTodos,getTodosById}=require("../controllers/getTodos");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

//Define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);
router.get("/getTodos/:id",getTodosById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;
