const express=require("express");
const router=express.Router();

// Import Controller 

const {createTodo}=require("../controllers/createTodo");
const {getTodos}=require("../controllers/getTodos");

//Define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);

module.exports=router;
