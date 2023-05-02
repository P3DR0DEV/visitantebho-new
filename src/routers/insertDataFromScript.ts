interface RequestBodyInsertion {
  txtnome: string
  txtcpf: string
  hostname: string
}
import { insertMongo } from "@/controllers"
import { Request, Router } from "express"
const router = Router()

router.post("/var/www", (req: Request) => {
  const { txtnome, txtcpf, hostname }: RequestBodyInsertion = req.body
  insertMongo(txtnome, txtcpf, hostname)
})

export { router as insert }
