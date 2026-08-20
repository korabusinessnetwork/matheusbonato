# Instalação e ambiente local

## Requisitos

- **Node.js 18 ou superior** (testado no 22) — https://nodejs.org
- npm (vem junto com o Node)
- Um editor de texto (VS Code, por exemplo)

Confira o que você tem:

```bash
node -v   # precisa ser v18 ou maior
npm -v
```

## Passo a passo

```bash
# 1. Instalar as dependências
npm install

# 2. Criar seu arquivo de ambiente
cp .env.example .env

# 3. Abrir o .env e colocar seu WhatsApp (DDI + DDD + número, só dígitos)
#    VITE_WHATSAPP_NUMERO=5544999998888

# 4. Rodar
npm run dev
```

Abra http://localhost:5173.

## Como saber que está tudo certo

```bash
npm run validar
```

Esse comando roda os 31 testes e faz o build. Se passar, o projeto está saudável.

Além disso, enquanto o número do WhatsApp for o de exemplo, a página mostra um
aviso vermelho embaixo do formulário — **só em desenvolvimento**, nunca em
produção.

## Testando o pedido de verdade

1. Role até o cardápio e clique em "Quero este" num pacote.
2. O formulário abaixo já vem com o pacote marcado.
3. Preencha e clique em **Enviar pedido no WhatsApp**.
4. Abre uma aba do WhatsApp Web (ou o aplicativo, no celular) com a mensagem
   inteira já escrita — nome, pacote, objetivo, prazo, orçamento e contexto.

Se clicar sem preencher, nada abre: os campos que faltam ficam marcados e o foco
vai para o primeiro deles.

## Problemas comuns

**"O botão abre uma conversa vazia"**
O `.env` não foi criado, ou o número está com máscara. Use só dígitos:
`5544999998888` — sem `+`, sem parênteses, sem traço.

**"Mudei o `.env` e não surtiu efeito"**
Variáveis de ambiente são lidas na inicialização. Pare o servidor (`Ctrl+C`) e
rode `npm run dev` de novo.

**"A fonte está diferente do esperado"**
As fontes vêm do Google Fonts. Sem internet (ou com o acesso bloqueado), a página
cai na pilha de fallback — continua legível e bem proporcionada, só muda o desenho
das letras.

**"npm install falhou"**
Confirme a versão do Node (`node -v`). Se estiver abaixo da 18, atualize.

## Estrutura do `.env`

Só existe uma variável, e ela **não é um segredo** (é um número público de
contato). Ainda assim o `.env` não é versionado, e nenhum segredo deve entrar
ali: tudo com prefixo `VITE_` fica visível no código publicado.
