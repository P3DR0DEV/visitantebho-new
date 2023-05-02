import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { index, auth, insert } from "@/routers"
const app = express()

config()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: "application/vnd.api+json" }))

app.use(index)
app.use(insert)
app.use("/api", auth)

export { app }
