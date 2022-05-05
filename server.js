// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
require('dotenv').config()

// SEQUELIZE CONNECTION
let sequelize = new Sequelize({  
    username: "postgres",
    password: "Anime@105",
    host: "127.0.0.1",
    storage: process.env.PG_URI,
    dialect: "postgres"})
    try {
        sequelize.authenticate() 
        console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
    } catch(err) {
        console.log(`Unable to connect to PG: ${err}`) 
    }

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})