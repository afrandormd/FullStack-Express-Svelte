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
import { createUsers, findUsers } from "../controllers/UserController.js";

// import validate register and login
import { validateRegister, validateLogin } from "../utils/validators/auth.js";

// import validate user
import { validateUser } from "../utils/validators/user.js";

// define route for register
router.post("/register", validateRegister, RegisterController);

// define route for login
router.post("/login", validateLogin, LoginController);

// define route for get user
router.get("/admin/users", verifyToken, findUsers);

// define route for user create
router.post("/admin/users/", verifyToken, validateUser, createUsers);

// export router
export default router;
