import { app } from "@/app"
import { config } from "dotenv"
import mongoose from "mongoose"
const port = process.env.PORT || 3000

config()

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => {
      console.log("Listening to port: ", port) //eslint-disable-line
    })
  })
  .catch((e) => {
    console.log(e) //eslint-disable-line
  })
