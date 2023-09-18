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
