# Beauty Sync API

API RESTful de agendamentos para salões de beleza, construída como um projeto de portfólio para demonstrar habilidades em backend moderno com Node.js, TypeScript e arquitetura limpa.

## ✨ Sobre o projeto

Este repositório apresenta um backend organizado para gerenciamento de usuários, autenticação e agendamentos em um salão de beleza. A estrutura do código foi pensada para facilitar manutenção, testes e evolução.

## 🚀 O que está demonstrado aqui

- API RESTful com Express e TypeScript
- Autenticação JWT e proteção de rotas
- Estrutura em camadas: controllers, services, repositories
- Persistência com PostgreSQL via Prisma
- Containerização com Docker
- Documentação técnica e decisões arquiteturais em `docs/ADR.md`

## 🛠️ Tecnologias principais

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Docker / Docker Compose
- JWT
- bcrypt
- dotenv

## 📁 Estrutura do projeto

- `src/server.ts` - ponto de entrada do servidor
- `src/routes/` - definição de rotas da API
- `src/controllers/` - controllers HTTP
- `src/services/` - regras de negócio
- `src/repositories/` - acesso a dados e abstração do banco
- `src/middlewares/` - middleware de autenticação e validação
- `prisma/schema.prisma` - modelo de dados
- `docs/ADR.md` - decisões arquiteturais e de design

## ⚙️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/EverOS/beauty-sync-api.git
   cd beauty-sync-api
   ```
2. Instale dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` com as variáveis necessárias para o banco e JWT.
4. Execute em modo de desenvolvimento:
   ```bash
   npm run dev-server
   ```

## 🌱 Observações para apresentação de portfólio

Este projeto é ideal para mostrar:

- prática com arquitetura modular e separação de responsabilidades
- domínio de TypeScript no backend
- integração com banco relacional e ORM moderno
- uso de Docker e ambiente de desenvolvimento replicável

## 📝 Documentação adicional

- Decisões técnicas e arquitetura: [docs/ADR.md](./docs/ADR.md)
