// import express
import express from "express";

// init express router
const router = express.Router();

// import register controller
import RegisterController from "../controllers/RegisterController.js";

// import register controller
import LoginController from "../controllers/LoginController.js";

// import validate register
import { validateRegister, validateLogin } from "../utils/validators/auth.js";

// define route for register
router.post("/register", validateRegister, RegisterController);

// define route for login
router.post("/login", validateLogin, LoginController);

// export router
export default router;
