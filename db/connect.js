const mongoose = require('mongoose')
 
const connectDB = (url) =>{ 
 return mongoose.connect(url, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     useUnifiedTopology: true,
 })
}

// change the ip address in netwrok access option in MongoDB for hosting site from heroku without any error
module.exports = connectDB