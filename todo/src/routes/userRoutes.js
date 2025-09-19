import express from 'express';
import { signupValidation, validate } from '../middlewares/validators.js';
import { signin, signup } from '../controllers/userController.js';
const router = express.Router();

// Signup route with validation
router.post('/signup', signupValidation, validate, signup);

// Signin route
router.post('/signin', signin);
export default router;
