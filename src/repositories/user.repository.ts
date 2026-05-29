import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// 1. Instanciamos o adaptador exigido pelo Prisma 7
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

// 2. Passamos o adaptador para dentro do Prisma
const prisma = new PrismaClient({
  adapter: adapter,
  log: ['query', 'info', 'warn', 'error'],
});
// 3. Criamos e exportamos a classe do Repositório
export class UserRepository {

  // Método assíncrono para criar um novo usuário
  async create(name: string, email: string, password: string) {

    // Usamos o prisma para inserir os dados na tabela 'user'
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return newUser;
  }

}