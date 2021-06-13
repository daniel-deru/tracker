import express from "express"
import cors from "cors"
import path from "path"

const server = express()
const __dirname = path.resolve()

// server.use(express.static(path.join("client", "build")))

// server.get("/*", (req, res) => {
//     res.sendFile(path.join("client", "build", "index.html"))
// })

server.get("/", (req, res) => {
    res.send("this is working")
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})