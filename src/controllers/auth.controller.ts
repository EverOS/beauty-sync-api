import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service.js';

export class AuthController {
  async handle(req: Request, res: Response) {
    // 1. Pega os dados que o usuário enviou no corpo da requisição (Insomnia/Frontend)
    const { email, password } = req.body;
    
    const authService = new AuthService();

    try {
      // 2. Manda o Service fazer o trabalho pesado (verificar banco, comparar senha, gerar token)
      const result = await authService.execute(email, password);
      
      // 3. Se deu tudo certo, retorna o Status 200 (OK) e o resultado (Usuário + Token)
      res.status(200).json(result);
    } catch (error: any) {
      // 4. Se o Service lançar aquele erro de "E-mail ou senha incorretos", devolvemos Status 401 (Não Autorizado)
      res.status(401).json({ error: error.message });
    }
  }
}