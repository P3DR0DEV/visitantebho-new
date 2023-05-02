import { userAuthenticate } from "@/controllers"
import { Request, Response, Router } from "express"
const router = Router()

// => Definindo as rotas de autenticação
router.post("/login", userAuthenticate) //{POST} localhost:3000/api/login
router.post("/logout", (req: Request, res: Response) => {
  res.redirect("/")
})

export { router as auth }
