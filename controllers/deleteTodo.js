//import the Model

const Todo=require("../models/Todo");


//Define Route Handler
exports.deleteTodo=async(req,res)=>{

    try{
            const id=req.params.id;

            const todo=await Todo.findByIdAndDelete({_id:id});

            //Send a JSON response with Successfull flag
            res.status(200).json(
                {
                    success:true,
                    data:todo,
                    message:"Delete Todo"
                }
            );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:err.message,
        })

    }
}