# Ponto das Portas - Landing Page

Landing Page de alta conversão desenvolvida para a **Ponto das Portas**, focada em vendas consultivas de esquadrias de alumínio em Valinhos e Região.

## 🚀 Tecnologias

- **Core:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** CSS Modules + Variáveis CSS (Design System próprio)
- **Animações:** [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)
- **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

### Desenvolvimento

Para rodar o servidor local (HMR):

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

### Build para Produção

Para gerar os arquivos otimizados em `/dist`:

```bash
npm run build
```

## 🎨 Design System

As variáveis de estilo globais estão definidas em `src/styles/variables.css`.

- **Cores Principais:** Azul Institucional (`#0A2342`) e Verde WhatsApp (`#2E8B57`).
- **Tipografia:** Inter (Corpo) e Montserrat (Títulos).

## 📂 Estrutura de Pastas

- `/src/components`: Componentes React divididos em `common` (botões, cards) e `sections` (hero, faq).
- `/src/data`: Conteúdo textual centralizado (`content.ts`).
- `/src/styles`: CSS global e tokens.

## 📦 Deploy

Este projeto está pronto para deploy na **Vercel** ou **Netlify**.
Basta conectar o repositório e usar as configurações padrão do Vite (Output directory: `dist`).
