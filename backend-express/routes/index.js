// import express
import express from "express";

// init express router
const router = express.Router();

// import verifyToken
import verifyToken from "../middlewares/auth.js";

// import register controller
import RegisterController from "../controllers/RegisterController.js";

// import login controller
import LoginController from "../controllers/LoginController.js";

// import user controller
import UserController from "../controllers/UserController.js";

// import validate register
import { validateRegister, validateLogin } from "../utils/validators/auth.js";

// define route for register
router.post("/register", validateRegister, RegisterController);

// define route for login
router.post("/login", validateLogin, LoginController);

// define route for user
router.get("/admin/users", verifyToken, UserController);

// export router
export default router;
