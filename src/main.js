const express = require("express")
const app = express()
const port = 5000
const aeroporto_router = require("./routers/aeroporto_router")
const caneta_router = require("./routers/caneta_router")
const moto_router = require("./routers/moto_router")
const refrigerante_router = require("./routers/refrigerante_router")

app.use(express.json())

app.use("/aeroporto", aeroporto_router)
app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/refrigerante", refrigerante_router)

app.listen(port, () => console.log("servidor running"))