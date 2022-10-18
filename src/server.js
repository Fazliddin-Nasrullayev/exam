const express = require('express');
const cookiesParser = require("cookie-parser")
require('dotenv').config()
const router = require('./router/router');
const PORT = process.env.PORT || 1251

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookiesParser())
app.use('/api', router)



  app.listen(PORT, _=> console.log(`http//localhost:${PORT}`))