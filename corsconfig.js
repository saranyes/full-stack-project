import cors from 'cors'

const corsoptions = {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

app.use(cors(corsoptions))


app.get("/api/user", (req, res) => {
    res.json(users)
})

app.listen(port => {
    console.log(`server is running at http://localhost:${port}`)
})



export default corsoptions