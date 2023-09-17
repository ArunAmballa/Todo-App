//import the Model

const Todo=require("../models/Todo");


//Define Route Handler
exports.createTodo=async(req,res)=>{

    try{
            //extract title and description from request.body
            const {title,description}=req.body;

            //Cretae a new Todo Object and insert into Db

            const response=await Todo.create({title,description});

            //Send a JSON response with Successfull flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entry Created"
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