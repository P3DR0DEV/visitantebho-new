import { Router } from "express"
import { notAllowed, visitorHome } from "@/controllers"
import { validUser } from "@/middlewares/validUser"

const router = Router()
router.get("/home", validUser, visitorHome)
router.get("/notAllowed", notAllowed)

export { router as index }
