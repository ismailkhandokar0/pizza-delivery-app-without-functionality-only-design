const express = require('express')   
const chalk = require('chalk') 
const ejs = require('ejs')
const morgan = require('morgan')
const expressLayout = require('express-ejs-layouts')
const path =  require('path')  // _dirname newar jonno ata nite hobe, views folder ta ciniye dite invild path use korte hobe


const app = express() 

//set template engine
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.use(expressLayout)

//assets
app.use(express.static('public'))


app.get('/',(req,res,next) =>{
    res.render('home')
})

app.get('/cart',(req,res,next) =>{
    res.render('customers/cart')
})

app.get('/login',(req,res,next) =>{
    res.render('auth/login')
})

app.get('/register',(req,res) =>{
    res.render('auth/register')
})


let PORT = process.env.PORT || 6500


app.listen(PORT, () =>{
    console.log(chalk.green.inverse(`SERVER IS CONNECTED ${PORT}`))
})