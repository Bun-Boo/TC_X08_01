import express from "express";
import authController from "../controllers/authControllers.js";
import authentication from "../middleWare/authenticate.js";

const router = express.Router ();

router.post ('/register', authController.registerUser );
router.post ('/login', authController.loginUser );
router.post('/logout', authentication.verifyToken, authController.logoutUser);
 

export default router;
