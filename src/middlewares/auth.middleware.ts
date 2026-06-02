import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // 1. O segurança olha para o cabeçalho da requisição procurando o crachá
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Acesso negado. Token não fornecido." });
  }

  // O padrão de mercado para envio de tokens é o formato: "Bearer <TOKEN_AQUI>"
  // Vamos dividir o texto pelo espaço para pegar apenas o código do token
  const parts = authHeader.split(' ');
  
  if (parts.length !== 2) {
    return res.status(401).json({ error: "Erro no formato do token." });
  }

  const [scheme, token] = parts;

  // Verifica se a palavra "Bearer" está lá
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: "Token malformatado." });
  }

  const secret = process.env.JWT_SECRET || 'minha_chave_secreta_de_desenvolvimento';

  // 2. O segurança confere se a assinatura do crachá é verdadeira e se não venceu
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido ou expirado." });
    }

    // 3. O crachá é válido! O segurança chama o next() para abrir a porta
    return next();
  });
}