const errorHandlerMiddleware = (err,req,res,next)=> {
    
    return  res.status(500).json({ msg:'somthing went wrong, try again later'})
}
module.exports = errorHandlerMiddleware