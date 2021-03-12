<div align="center">
  <img src="public/logo.png" with="800" height="200"/>
  <h1>🗡  Página de quiz sobre The Witcher 3</h1>
</div>


![Badge](https://img.shields.io/github/license/PedroHenry-Santos/AluraQuiz-TW3?style=flat&label=LICENSE)
![Badge](https://img.shields.io/badge/NODE-v15.5.1-blue?style=flat&logo=node.js&link=https://nodejs.org/pt-br/)
![Badge](https://img.shields.io/badge/TYPESCRIPT-v4.2.3-blue?style=flat&logo=TypeScript&link=https://www.typescriptlang.org/pt/)
![Badge](https://img.shields.io/badge/REACT-v16.8.0-blue?style=flat&logo=react&link=https://pt-br.reactjs.org/)
![Badge](https://img.shields.io/badge/NEXT.JS-v10.0.8-blue?style=?style=flat&logo=next.js&link=https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)
![Badge](https://img.shields.io/badge/STYLED--COMPONENTS-v5.0.0-blue?style=flat&logo=styled-components&link=https://styled-components.com/)
![Badge](https://img.shields.io/badge/DEPLOY-VERCEL-blue?style=?style=flat&logo=vercel&link=https://vercel.com/)

# :page_with_curl: Índice

* [Sobre o projeto](#interrobang-sobre-o-projeto)
  - [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Executando a aplicação](#rocket-executando-a-aplicação)
  - [Modificando estilos e temas do Quiz](#pencil2-modificando-estilos-e-temas-do-quiz)
* [Para contribuir](#mailbox-para-contribuir)
  - [Roteiro de funcionalidade da aplicação](#heavy_check_mark-roteiro-de-funcionalidade-da-aplicação)
  - [Histórico de atualizações](#clock10-histórico-de-atualizações)



# :interrobang: Sobre o projeto

A Alura promoveu uma imersão sobre React onde o objetivo era mostrar os benefícios da utilização no NextJS, um framework que permite renderização pelo lado servidor, geração de páginas estáticas, deploy da aplicação de maneira facilitada com a melhor infraestrutura possível e facilitar a utilização de SEO (Search Engine Optimization) com React. Assim, fornecendo uma melhora no desempenho na aplicação.<br/><br/> Nesta imersão foi proposto o desenvolvido uma pagina de 'quiz' temática que pudesse abordar vários assuntos, utilizando as ferramentas do React (useStates, useEffect e componentização) e as funcionalidades do NextJS (GetServerSideProps, useRouter). Além da utilização de [CSS-in-JS](https://en.wikipedia.org/wiki/CSS-in-JS) através do Styled-Components, ferramentad de padronização de códigos como Prettier, ESLint e EditorConfig, animações declarativas de componentes usando o Framer-Motion e animações de carregamento com o Lottie. Indo um pouco além do proposto, foi utilizado em toda aplicação o TypeScript que um conjunto de ferramentas em cima do JavaScript que adiciona tipagem estática no ambiente de desenvolvimento.<br/><br/>O tema escolhido para minha aplicação foi sobre o jogo The Witcher 3: Wild Hunt, um jogo com elementos de RPG muito premiado. Onde foram realizadas perguntas sobre o jogo e o ambiente em volta dele, no final foi adicionado a possibilidade de jogar com outros temas relacionados a cultura POP.

## 🧑‍💻 Tecnologias utilizadas

### :link: Ferramentas

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [NodeJS](https://pt.wikipedia.org/wiki/Node.js)
* [TypeScript](https://www.typescriptlang.org/pt/)
* [ReactJS](https://pt-br.reactjs.org/)
* [NextJS](https://nextjs.org/docs/getting-started)
* [Styled-Components](https://styled-components.com/docs)

### :link: Padronização de código

* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)
* [EditorConfig](https://editorconfig.org/)

### :link: Animações e movimentações

* [Framer Motion](https://www.framer.com/motion/)
* [Lottie](https://github.com/airbnb/lottie-web)

# :rocket: Executando a aplicação

Primeiramente clone o repositório para sua maquina ou faça o 'download' em formato ZIP e descompacte. Para realizar a clonagem do repositório utilize o comando:

    git clone https://github.com/ReneSena/quiz-cavaleiro-zodiaco.git

ou

    git clone git@github.com:PedroHenry-Santos/AluraQuiz-TW3.git

Após basta utilizar instalar a dependência utilizando o gerenciador de pacote de sua preferência. Conforme abaixo:

    yarn install

ou

    npm install

##  :pencil2: Modificando estilos e temas do Quiz

É possível personalização do tema e dos estilos utilizados na página, para isso basta alterar os valores do arquivo ``db.json`` na raiz do projeto. Esse é o arquivo que simula o resultado do banco de dados.

```JSON
{
  "bg": "[Endereço da imagem de fundo]",
  "title": "[Título do quiz]",
  "description": "[Descrição do quiz]",
  "questions": [
    {
      "image": "[Endereço da imagem da pergunta]",
      "title": "[Título da pergunta]",
      "description": "[Descrição da pergunta]",
      "answer": ["Posição da resposta certa (obs. Número)"],
      "alternatives": [
        "Opção 1",
        "Opção 2",
        "...",
        "Opção N"
      ]
    },
    {
      "Próxima questão": "..."
    }
  ],
  "external": [
    "[Endereço da API com os dados]",
    "[...]",
    "[...]"
  ],
  "theme": {
    "colors": {
      "primary": "[Código hexadecimal da cor]",
      "secondary": "[Código hexadecimal da cor]",
      "mainBg": "[Código hexadecimal da cor]",
      "contrastText": "[Código hexadecimal da cor]",
      "wrong": "[Código hexadecimal da cor]",
      "success": "[Código hexadecimal da cor]"
    },
    "borderRadius": "[valor do tamanho (Xpx, Xrem etc.)]"
  }
```

Todas as cores base, imagem de fundo e conteúdo de questões se encontra neste arquivo. Sendo, ``"bg"`` o local para o endereço da imagem de fundo utilizada, ``"title"`` é o título do quiz, ``"description"`` é a descrição do quiz, ``"questions"`` é um vetor onde é possível informar o conteúdo da questão, com destaque para ``"answer"`` que considera o vetor ``"alternatives"`` começando em 0.
<br/><br/>
Temos o campo ``"external"`` onde é possível colocar o link dá API publica de outras pessoas (obs.: Não é necessário ter um Front e sim uma API que fornece um ``db.json`` hospedado em algum lugar). Por último temos ``theme`` onde estão as cores e algumas definições de estilos.

# :mailbox: Para contribuir

Caso queira ajudar a implementar novas funcionalidade nessa aplicação, poderá seguir o **roteiro de funcionalidades** a seguir. Ou também poderá propor sua própria funcionalidade.<br/><br/>
Para isso basta seguir o [roteiro](https://github.com/PedroHenry-Santos/AluraQuiz-TW3/blob/main/CONTRIBUTING.md) em CONTRIBUTING.

## :heavy_check_mark: Roteiro de funcionalidade da aplicação

Para um acompanhamento mais atualizado verifique a aba [Projeto](https://github.com/PedroHenry-Santos/AluraQuiz-TW3/projects/1).

-   [x] Página de identificação                               (:warning: Pode sofrer modificações)
-   [x] Tela de carregamento para apresentar o Quiz           (:warning: Pode sofrer modificações)
-   [x] Resposta interativa após cada pergunta                (:warning: Pode sofrer modificações)
-   [x] Tela de carregamento para apresentar o resultado      (:warning: Pode sofrer modificações)
-   [x] Link para Quizes de outros temas                      (:warning: Pode sofrer modificações)
-   [ ] Temporizador para a pergunta                          (:construction: Em desenvolvimento)
-   [ ] Display com contagem de pontos                        (:construction: Em desenvolvimento)
-   [ ] Interatividade através de sons                        (:construction: Em desenvolvimento)
-   [ ] Temas dark e light                                    (:construction: Em desenvolvimento)

## :clock10: Historico de atualizações

Para saber sobre as [versões](https://github.com/PedroHenry-Santos/AluraQuiz-TW3/releases) deste codigo consulte o CHANGELOG detalhado.

# :lock: Licença

[MIT License](https://github.com/PedroHenry-Santos/AluraQuiz-TW3/blob/main/LICENCE.md) ® [Pedro Santos](https://github.com/PedroHenry-Santos)



