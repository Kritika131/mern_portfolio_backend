import {Router} from "express"
import { adminLogin, adminSignUp } from "../controllers/userControllers.js";


const router = Router()


router
.post("/admin-signup",adminSignUp)
   .post("/admin-login",adminLogin)
export default router;