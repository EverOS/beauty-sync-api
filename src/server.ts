import express from "express";
import cors from "cors";
//1. Importamos as rotas de usuário que acabamos de criar
import { userRoutes } from "./routes/user.routes.js";
import { authRoutes } from './routes/auth.routes.js';

// Inicializa o servidor
const app = express();
// Define a porta (usa a variável de ambiente ou a porta 3000 por padrão)
const PORT = process.env.PORT || 3000;

// Middlewares (Configurações básicas do garçom)
app.use(cors()); // Permite que o Frontend converse com a API
app.use(express.json()); // Ensina o servidor a entender dados no formato JSON

// Rota de teste (Para sabermos se o servidor está vivo)
app.get("/ping", (req, res) => {
  res.json({ message: "Beauty Sync API is running! 🚀" });
});

// 2. Avisamos o Express para usar essas rotas sempre que o endereço começar com "/users"
app.use("/users", userRoutes);
app.use(authRoutes);

// Liga o servidor e fica escutando a porta
app.listen(PORT, () => {
  console.log(`[Servidor] Rodando na porta ${PORT} 🚀🚀🚀`);
});