import express from "express";
import cors from "cors";

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

// Liga o servidor e fica escutando a porta
app.listen(PORT, () => {
  console.log(`[Servidor] Rodando na porta ${PORT}`);
});