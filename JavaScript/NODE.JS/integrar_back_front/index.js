const PORT  =3000
const express  = require("express")
const app = express()
const apiRoute = require("./routes/api")
const path = require("path")


app.use("/", express.static(path.join(__dirname, "public")))

app.use("/api",apiRoute)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


