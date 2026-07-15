# 👟 SyntaxWear App

O **SyntaxWear App** é um e-commerce moderno e responsivo de calçados premium (tênis e sapatos casuais), inspirado no estilo minimalista e ecológico de calçados de alta performance. O projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end para garantir performance, tipagem estática robusta, estilização eficiente e gerenciamento avançado de rotas.

---

## 🚀 Tecnologias Utilizadas

A aplicação utiliza uma stack de desenvolvimento moderna e focada em qualidade de código:

- **[React 19](https://react.dev/):** A versão mais recente do React, aproveitando as melhorias de performance e renderização.
- **[Vite](https://vite.dev/):** Ferramenta de build extremamente rápida que proporciona um ambiente de desenvolvimento ágil.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática em toda a aplicação para prevenção de erros e melhor experiência de desenvolvimento.
- **[TanStack React Router](https://tanstack.com/router/v1):** Sistema de roteamento baseado em arquivos (File-based Routing) com tipagem estática de ponta a ponta (Type-safe Routing).
- **[Tailwind CSS v4](https://tailwindcss.com/):** Nova geração da biblioteca de estilização utilitária integrada diretamente via Vite (`@tailwindcss/vite`), oferecendo rapidez e CSS moderno.
- **[React Hook Form](https://react-hook-form.com/):** Gerenciamento eficiente e performático de formulários.
- **[Zod](https://zod.dev/):** Validação de esquemas de dados de forma declarativa e integrada ao React Hook Form.
- **[React Icons](https://react-icons.github.io/react-icons/):** Biblioteca rica de ícones para interfaces limpas e modernas.
- **React Context API:** Utilizada para o gerenciamento global do carrinho de compras.

---

## 📦 Estrutura de Pastas Principal

A estrutura do projeto foi planejada para garantir modularidade e manutenibilidade:

```text
src/
├── assets/             # Fontes locais e imagens dos produtos
├── components/         # Componentes reutilizáveis (Header, Footer, CartDrawer, etc.)
├── contexts/           # Provedores de contexto global (Carrinho de compras)
├── interfaces/         # Interfaces e tipos do TypeScript (Produtos, Categorias, Endereço)
├── mocks/              # Dados simulados para produtos e categorias
├── pages/              # Estrutura de páginas e rotas gerenciadas pelo TanStack Router
│   ├── __root.tsx      # Layout raiz da aplicação
│   ├── _app/           # Rotas públicas e logadas da aplicação (Home, Detalhes, Sobre)
│   └── _auth/          # Rotas de autenticação (Sign In / Sign Up)
├── styles/             # Estilos globais utilizando Tailwind CSS v4
└── utils/              # Funções utilitárias (Validador de CPF, Formatador de moeda)
```

---

## ✨ Principais Funcionalidades

1. **Catálogo de Produtos:** Exibição dinâmica de calçados com imagens em alta qualidade, preços formatados e descrições detalhadas.
2. **Filtro por Categorias:** Navegação segmentada por categorias específicas (Masculino, Feminino, Moderno, Futurista, Outlet).
3. **Página de Detalhes do Produto (`/products/$productId`):** Informações detalhadas sobre cada modelo, incluindo material, cor e preço.
4. **Carrinho de Compras Interativo (`CartDrawer`):**
   - Adicionar itens ao carrinho.
   - Atualizar quantidades em tempo real.
   - Remover itens indesejados.
   - Cálculo automático do valor total.
5. **Cálculo de CEP:** Simulação de estimativa de entrega na sacola de compras com validação via Zod.
6. **Autenticação de Usuário (Telas e Validações):**
   - Página de Login (`/sign-in`) com validação de credenciais.
   - Página de Cadastro (`/sign-up`) com regras rígidas de segurança e **validação nativa de CPF**.
7. **Inscrição em Newsletter:** Formulário de captação de e-mails para novidades, integrado com validação de formato.
8. **Páginas Institucionais:** Seções "Sobre Nós" e "Nossas Lojas".

---

## 🛠️ Como Rodar o Projeto Localmente

Siga o passo a passo abaixo para configurar e executar a aplicação em seu ambiente local:

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (Versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm** (já vem com o Node) ou **yarn** / **pnpm**.

### 2. Clonar o Repositório
Abra o seu terminal e execute:
```bash
# Clone este repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd syntax-wear-app
```

### 3. Instalar as Dependências
Instale todas as dependências do projeto com o comando:
```bash
npm install
```

### 4. Executar em Ambiente de Desenvolvimento
Para iniciar o servidor local de desenvolvimento com Hot Reload do Vite:
```bash
npm run dev
```
O console exibirá o endereço local da aplicação. Geralmente é:  
👉 **[http://localhost:5173](http://localhost:5173)**

### 5. Compilar para Produção (Build)
Para compilar a aplicação de forma otimizada para implantação em produção:
```bash
npm run build
```
Os arquivos gerados para distribuição serão salvos na pasta `dist/`.

### 6. Visualizar a Build de Produção Localmente
Após gerar a build, você pode testar o desempenho e comportamento de produção localmente rodando:
```bash
npm run preview
```

### 7. Linter e Padronização de Código
Para executar o ESLint e checar problemas de formatação ou padronização no código:
```bash
npm run lint
```

---

## 📝 Licença

Este projeto é de uso educacional e desenvolvimento profissional. Sinta-se livre para explorar, estudar e expandir suas funcionalidades!
