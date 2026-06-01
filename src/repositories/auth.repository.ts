import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// 1. Configuração da conexão com o banco (Padrão Prisma 7)
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter: adapter,
});

export class AuthRepository {
  // 2. Nossa função que busca um usuário pelo e-mail
  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email, // Busca na coluna 'email' o valor que recebemos
      },
    });
    
    return user; // Retorna os dados do usuário (se achar) ou 'null' (se não achar)
  }
}