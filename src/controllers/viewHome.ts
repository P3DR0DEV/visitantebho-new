import { Visitor } from "@/model/visitor"
import { Request, Response } from "express"

export const visitorHome = (req: Request, res: Response) => {
  Visitor.find()
    .sort({ STAMP: -1 })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send({ err })
    })
}

export const notAllowed = (req: Request, res: Response) => {
  res.send({ message: "Not Allowed" })
}
