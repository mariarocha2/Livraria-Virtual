Sobre o projeto

O Bosque das Palavras é uma livraria virtual fictícia desenvolvida como atividade acadêmica. A proposta é apresentar um ambiente digital inspirado na natureza, na fantasia e na magia da leitura, reunindo livros de diferentes gêneros, como romance, fantasia e suspense.

O projeto tem como objetivo aplicar conhecimentos de desenvolvimento web na criação de uma interface intuitiva, organizada e visualmente agradável.

Projeto acadêmico: este site possui finalidade educacional e demonstrativa, sem realização de vendas reais ou finalidade comercial ou lucrativa.

Funcionalidades

Página inicial: apresentação da livraria e de sua proposta.

Catálogo de livros: exibição de livros com capas, títulos e preços ilustrativos.

Botões de compra: interface ilustrstiva sem direcionamento real para compras.

Layout responsivo: adaptação da interface a diferentes tamanhos de tela, conforme os estilos implementados.

Rodapé com contato: espaço destinado às informações de contato e aos avisos do projeto acadêmico.

Tecnologias utilizadas

React.js — construção da interface por meio de componentes.

JavaScript — implementação da lógica e das interações.

HTML — estruturação dos elementos da página.

CSS — estilização, layout e identidade visual.

Git e GitHub — versionamento e armazenamento do código-fonte.

Vercel — publicação e hospedagem do projeto.

Estrutura do projeto

site/
├── public/
│   └── img/
│       └── imagens utilizadas no site
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Banner.css
│   │   ├── CardProduto.js
│   │   ├── CardProduto.css
│   │   ├── Header.js
│   │   ├── Header.css
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Contato.js
│   │   ├── Contato.css
│   │   ├── Produtos.js
│   │   └── Produtos.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

Como executar o projeto localmente

Pré-requisitos

Node.js

npm, instalado junto com o Node.js

Git, caso deseje clonar o repositório

1. Clone o repositório

git clone https://github.com/mariarocha2/Livraria-Virtual.git

2. Entre na pasta do projeto

cd Livraria-Virtual/site

3. Instale as dependências

npm install

4. Execute o projeto

npm start

O Create React App abrirá o projeto no navegador, normalmente no endereço:

http://localhost:3000

5. Gere a versão de produção

Para verificar se o projeto compila corretamente, execute:

npm run build

Deploy

O projeto foi publicado utilizando a plataforma Vercel.

Link do projeto: https://site-pi-ten-93.vercel.app

Este projeto foi desenvolvido para fins educacionais, com o propósito de praticar conceitos de desenvolvimento de interfaces web, organização de componentes React, estilização CSS, versionamento de código e publicação de aplicações.

Os livros, preços e informações apresentados possuem caráter demonstrativo. O site não representa uma operação comercial real.
