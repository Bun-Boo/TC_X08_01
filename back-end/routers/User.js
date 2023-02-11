import authentication from "../middleWare/authenticate.js";
import userController from "../controllers/userController.js";
import express from "express";

const route = express.Router();

route.get('/', authentication.verifyToken , userController.getAllUsers);
route.get('/:id', authentication.verifyToken, userController.getUserById);
route.put('/update', authentication.verifyToken, userController.updateUserInformation)
route.delete('/delete', authentication.verifyToken, userController.deleteUser);


export default route; 