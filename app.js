require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.SERVER_PORT
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));
app.use(cors())

app.listen(port, () => {        //伺服器運行的Function
    console.log(`Server listening at http://localhost:${port}`)  //運作提示字樣
})

app.use('/', routes)

module.exports = app