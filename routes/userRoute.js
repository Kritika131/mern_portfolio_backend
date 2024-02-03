import {Router} from "express"
import { adminLogin, adminSignUp, forgotPassword } from "../controllers/userControllers.js";


const router = Router()


router
.post("/admin-signup",adminSignUp)
   .post("/admin-login",adminLogin)
   .put("/admin-forgotpass", forgotPassword )
export default router;