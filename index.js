const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const dbConnect = require('./db')
const model = require('./model')

app.use(express.json())
app.use(cors())
dbConnect()

app.get('/v2/top-headlines', async (req, res) => {
    try {
        const result = await model.find({});
        console.log(result);
        res.status(200).json({
            status: "ok",
            totalResults: result[0].articles.length,
            articles:result[0].articles
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

app.listen(4500,()=>console.log('Server started at 4500'))
