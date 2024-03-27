export const errorHandling=(err,req,res,next)=>{

    let statusCode=req.statusCode||500;
    let message=err.message||"some Error"
    res.status(statusCode).send(message)
}