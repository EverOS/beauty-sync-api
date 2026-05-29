// 1. Importamos as tipagens do Express para o TypeScript nos ajudar
import type { Request, Response } from 'express';
// 2. Importamos o nosso Serviço
import { UserService } from '../services/user.service.js';

export class UserController {
  
  // O método "handle" (lidar) vai receber o pedido (req) e a resposta (res)
  async handle(req: Request, res: Response) {
    try {
      // 1. Extraímos os dados que o cliente enviou no corpo do pedido (JSON)
      const { name, email, password } = req.body;

      // 2. Instanciamos o nosso "Chef" (Serviço)
      const userService = new UserService();

      // 3. Mandamos o serviço executar o trabalho
      const user = await userService.execute(name, email, password);

      // 4. Devolvemos a resposta com o código HTTP 201 (Criado com sucesso)
      res.status(201).json(user);

    } catch (error: any) {
      // Se a nossa regra de negócio lá do Serviço falhar (ex: faltou senha),
      // o código pula direto para cá e devolve um erro 400 (Bad Request)
      res.status(400).json({ error: error.message });
    }
  }
}