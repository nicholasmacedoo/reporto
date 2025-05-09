# 🧾 reporto

**Construtor visual de relatórios em HTML com exportação para PDF.**  
Crie páginas de relatórios personalizadas de forma visual, com suporte a múltiplos dispositivos, histórico de edição e visualização em tempo real.

## 🚀 Tecnologias

Este projeto foi construído com as seguintes ferramentas:

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🧩 [ShadCN UI](https://ui.shadcn.dev/)
- 🖨️ Exportação para PDF (ex: `html2pdf.js`, `jsPDF`, ou solução customizada)

## 🛠️ Funcionalidades

- Editor visual de elementos HTML com drag-and-drop (em breve)
- Histórico de alterações com undo/redo
- Modo de visualização (preview)
- Suporte a múltiplos dispositivos (Desktop, Tablet, Mobile)
- Exportação de relatórios em PDF
- Arquitetura baseada em Provider + Reducer
- Interface com componentes acessíveis e modernos via ShadCN UI

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/reporto.git
cd reporto
```

Instale as dependências:

```bash
npm install
# ou
yarn
```

Execute o projeto:

```bash
npm run dev
# ou
yarn dev
```

🧪 Scripts
dev: inicia o ambiente de desenvolvimento

build: compila o projeto para produção

preview: visualiza o build

🧱 Estrutura

```bash


src/
│
├── components/ # Componentes reutilizáveis
├── context/ # Context + Reducer do editor
├── editor/ # Lógica e estado do editor visual
├── hooks/ # Hooks customizados
├── pages/ # Páginas principais
├── shared/ # Constantes e utilitários globais
└── styles/ # Estilos globais
```

## 📄 Licença

Este projeto está licenciado sob a MIT License.

Desenvolvido com 💻 por Nicholas Macedo.
