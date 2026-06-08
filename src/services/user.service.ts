// 1. Importamos o nosso Repositório
// Atenção de Tech Lead: No padrão moderno ESM, importações locais precisam do ".js" no final, mesmo o arquivo sendo ".ts".
import { UserRepository } from '../repositories/user.repository.js';
import bcrypt from 'bcrypt';

export class UserService {
  // Instanciamos o repositório para podermos usá-lo dentro desta classe
  private userRepository = new UserRepository();

  // A função "execute" vai receber o pedido e fazer as validações
  async execute(name: string, email: string, password: string) {

    // Regra de Negócio 1: Validação básica
    if (!name || !email || !password) {
      throw new Error("Todos os campos (nome, email e senha) são obrigatórios.");
    }

    // Regra de Negócio 2: Criptografia
    // O número 10 é o "salt", a força do embaralhamento. É o padrão seguro da indústria.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Se passou por todas as regras, mandamos o Repositório salvar no banco (usando a senha criptografada!)
    const user = await this.userRepository.create(name, email, hashedPassword);

    return user;
  }

  async listAll() {
    const allUsers = await this.userRepository.listAll()
    return allUsers;
  }
}