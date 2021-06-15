import express from "express"
import cors from "cors"
import path from "path"

const server = express()
const __dirname = path.resolve()

//this is for production
server.use(express.static(path.join(__dirname, "client", "build")))

server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})





const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})