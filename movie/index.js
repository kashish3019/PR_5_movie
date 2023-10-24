const express = require('express')
const { userRouter } = require('./routes/user.route')
const {movieRouter} = require('./routes/movie.route')
const { connection } = require('./config/db')
const app = express()
app.use(express.json())

app.use(userRouter)
app.use(movieRouter)
app.listen(8090,()=>{
    console.log('server listening on port 8090');
    connection()
})




