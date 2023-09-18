//import the Model
const Todo=require("../models/Todo");

//Define Route Handler
exports.getTodos=async(req,res)=>
{

    try
    {   
        //Fetch Todos Items from Data Base
        const todos=await Todo.find({})

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Fetched Entire Todo Data"
            }
        );

           
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:err.message,
        })

    }

}


exports.getTodosById=async(req,res)=>
{

    try
    {   
        //Get ID
        const id=req.params.id;

        //Fetch Todos Items from Data Base Based on Id
        const todo=await Todo.findById({_id:id})
        
        if (!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found"
            })
        }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Fetched Required Todo Data"
            }
        );

           
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:err.message,
        })
    }

}
