const express = require("express");

const cors = require("cors")

const app = express();

const connect = require("./configs/db")


const teacherController = require("./controller/teacherController")

app.use(cors())
app.use(express.json())
app.use("/teacher", teacherController)


app.listen(process.env.PORT || 5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})