const mongoose=require('mongoose')

const newsSchema= new mongoose.Schema({
    articles:[{
        type:Object
    }]
})

module.exports = mongoose.model('newsIndia', newsSchema)