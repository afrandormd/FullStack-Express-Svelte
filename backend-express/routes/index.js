// import express
import express from "express";

// init express router
const router = express.Router();

// import register controller
import RegisterController from "../controllers/RegisterController.js";

// import validate register
import { validateRegister } from "../utils/validators/auth.js";

// define route for register
router.post("/register", validateRegister, RegisterController);

// export router
export default router;
