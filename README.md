# Portfólio Profissional - DIO JavaScript Developer

Este projeto, desenvolvido como parte do desafio prático da formação **JavaScript Developer** da [Digital Innovation One (DIO)](https://www.dio.me/), consiste na criação de uma página de portfólio profissional e dinâmica.

## 🚀 Sobre o Projeto

O objetivo foi construir uma interface web moderna e responsiva para apresentar informações profissionais, como dados pessoais, habilidades, idiomas, experiências e projetos. A página consome dados de um arquivo JSON de forma dinâmica utilizando JavaScript, permitindo que as informações sejam facilmente atualizadas sem a necessidade de alterar o código HTML.

### ✨ Funcionalidades

- **Carregamento Dinâmico de Dados:** As informações do portfólio (experiências, projetos, habilidades, etc.) são carregadas a partir de um arquivo `profile.json`.
- **Design Responsivo:** A página se adapta a diferentes tamanhos de tela, como desktops, tablets e smartphones.
- **Componentes Interativos:** Uso de acordeões (accordions) para exibir e ocultar seções de conteúdo, melhorando a experiência do usuário.

### 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [Normalize.css](https://necolas.github.io/normalize.css/) para reset de estilos.
- [Google Fonts](https://fonts.google.com/) para as fontes da página.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```

├── assets/
│   ├── fonts/      # Fontes personalizadas
│   └── img/        # Imagens e ícones
├── css/            # Arquivos de estilo CSS
├── javascript/     # Arquivos de script JavaScript
├── .gitignore
├── index.html      # Arquivo principal da página
├── profile.json    # Dados do portfólio em formato JSON
└── README.md
```

## 🚀 Como Executar

Como este é um projeto front-end estático, você pode simplesmente abrir o arquivo `index.html` em seu navegador de preferência.

Para uma melhor experiência de desenvolvimento, você pode usar um servidor local. Se você tiver o Node.js instalado, pode usar o `http-server`:

1. Instale o `http-server` globalmente (caso ainda não tenha):

    ```bash
    npm install -g http-server
    ```

2. Execute o servidor na pasta raiz do projeto:

    ```bash
    http-server
    ```

3. O projeto abrirá automaticamente no seu navegador.

## 🛠️ Principais arquivos

index.html
Estrutura principal da página
Define os pontos onde os dados serão carregados via id
main.js
Manipula o DOM para inserir dados dinâmicos
Atualiza seções como perfil, skills, idiomas, portfólio, etc.
api.js
Responsável por buscar os dados do perfil
acordeon.js
Implementa a lógica do botão de "abre/fecha" (accordion) para cada seção

## 👨‍💻 Autor

- **LinkedIn:** [www.linkedin.com/in/pedro-zeferino-da-silva-625394330](https://www.linkedin.com/in/pedro-zeferino-da-silva-625394330)

---

Feito com ❤️ por **[Pedro Zeferino da Silva]**! 👋
