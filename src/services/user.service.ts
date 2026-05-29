// 1. Importamos o nosso Repositório
// Atenção de Tech Lead: No padrão moderno ESM, importações locais precisam do ".js" no final, mesmo o arquivo sendo ".ts".
import { UserRepository } from '../repositories/user.repository.js';

export class UserService {
  // Instanciamos o repositório para podermos usá-lo dentro desta classe
  private userRepository = new UserRepository();

  // A função "execute" vai receber o pedido e fazer as validações
  async execute(name: string, email: string, password: string) {
    
    // Regra de Negócio 1: Validação básica
    if (!name || !email || !password) {
        throw new Error("Todos os campos (nome, email e senha) são obrigatórios.");
    }

    // TODO: No futuro, vamos adicionar a criptografia da senha e verificar e-mail duplicado bem aqui!

    // Se passou por todas as regras, mandamos o Repositório salvar no banco
    const user = await this.userRepository.create(name, email, password);

    return user;
  }
}