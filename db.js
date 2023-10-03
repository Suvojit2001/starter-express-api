const mongoose=require('mongoose')
require('dotenv').config()

const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Connected'))
    .catch((error)=>console.error(error))
}

module.exports = dbConnect