import express from 'express'
import users from './users.js';



const app = express()

app.get("/", (req, res) => {
    res.send("server is running")

})

app.get("/api/user", (req, res) => {
    res.send(users)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})