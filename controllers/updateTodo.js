//import the Model

const Todo=require("../models/Todo");


//Define Route Handler
exports.updateTodo=async(req,res)=>{

    try{
            
        const {id}=req.params;

        const {title,description}=req.body;

        const todo =await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()},
        )

            //Send a JSON response with Successfull flag
            res.status(200).json(
                {
                    success:true,
                    data:todo,
                    message:"Updated Record"
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