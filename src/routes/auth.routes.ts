import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

const authRoutes = Router();
const authController = new AuthController();

// Definimos que quando fizerem um POST na URL /login, o AuthController assume.
authRoutes.post('/login', authController.handle);

export { authRoutes };