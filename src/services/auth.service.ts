import { AuthRepository } from '../repositories/auth.repository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
  // Instanciamos o repositório que acabamos de criar
  private authRepository = new AuthRepository();

  async execute(email: string, password: string) {
    
    // Regra 1: O usuário existe?
    const user = await this.authRepository.findUserByEmail(email);
    
    if (!user) {
      // Dica de Segurança: Nunca diga "E-mail não existe". Um hacker poderia usar isso para descobrir e-mails válidos.
      // Diga sempre "E-mail ou senha incorretos".
      throw new Error("E-mail ou senha incorretos.");
    }

    // Regra 2: A senha está correta?
    // O bcrypt.compare pega a senha limpa digitada agora e compara com o hash salvo no banco.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error("E-mail ou senha incorretos.");
    }

    // Regra 3: Imprimir o Crachá (Gerar o Token JWT)
    // A chave secreta é a "assinatura do diretor" que valida o crachá. 
    // (Num ambiente real, isso fica no arquivo .env. Por agora, deixaremos um fallback seguro).
    const secret = process.env.JWT_SECRET || 'minha_chave_secreta_de_desenvolvimento';
    
    const token = jwt.sign(
      { id: user.id, role: user.role }, // Payload: Informações que vão dentro do crachá (NUNCA coloque senhas aqui)
      secret,                           // A assinatura secreta da empresa
      { expiresIn: '1d' }               // Validade do crachá: 1 dia (1 day)
    );

    // Retornamos as informações do usuário (mas NUNCA a senha) e o Token
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: token
    };
  }
}