# Manual de Configuração do Ambiente (Setup)

Este documento guia qualquer desenvolvedor a configurar a API Beauty Sync localmente, saindo do zero até o servidor rodando.

## 1. Pré-requisitos
Antes de começar, verifique se você possui as ferramentas abaixo instaladas no seu sistema operacional (preferencialmente Ubuntu/Linux):
- **Node.js** (v24 ou superior): `node -v`
- **Git**: `git --version`
- **Docker**: `docker --version`

> **Troubleshooting de Permissão (Linux):** Se o Docker apresentar erro de permissão no socket (`var/run/docker.sock`), adicione seu usuário ao grupo do docker executando `sudo usermod -aG docker $USER`. Em seguida, reinicie sua sessão ou o terminal.

## 2. Configurando o Banco de Dados (Docker)
Nossa infraestrutura de dados local é gerida via containers para garantir isolamento e paridade com a produção.

1. Clone este repositório e acesse a pasta raiz.
2. Suba o container do PostgreSQL em background:
```bash
    docker compose up -d
```
3. Valide se o container `beauty_sync_db` está ativo:
```bash
    docker ps
```
## 3. Variáveis de Ambiente
Crie um arquivo chamado `.env` na raiz do projeto e configure a URL de conexão do banco de dados com as mesmas credenciais definidas no `docker-compose.yml`:
`DATABASE_URL="postgresql://admin:secretpassword@localhost:5432/beautysync?schema=public"`

## 4. Instalando Dependências e Configurando o Prisma
O projeto utiliza ECMAScript Modules (ESM) e TypeScript.

1. Instale todas as dependências do Node.js:
```bash
    npm install 
```
2. Sincronize o banco de dados com a estrutura (schema) do Prisma:
```bash
    npx prisma migrate dev
```
## 5. Rodando a Aplicação
Com o banco rodando e as dependências instaladas, inicie o servidor de desenvolvimento:
```bash
    npm run dev
```
A API estará escutando na porta 3000. Para validar, acesse no seu navegador ou via cURL:
`http://localhost:3000/ping`

(A resposta esperada é um JSON: `{"message": "Beauty Sync API is running! 🚀"}`)