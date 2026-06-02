import { Router } from 'express';
// Lembre-se: no ESM, importações locais levam o .js no final
import { UserController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

// Inicializamos o gerenciador de rotas do Express
const userRoutes = Router();

// Instanciamos o nosso Controller
const userController = new UserController();

// Definimos a rota.
// Quando a API receber um POST em "/", ela chama a função "handle" do Controller
userRoutes.post('/', userController.handle);

userRoutes.get('/vip', authMiddleware, (req, res) => {
    return res.status(200).json({ message: "Acesso liberado! Você está na área VIP." });
});

export { userRoutes };