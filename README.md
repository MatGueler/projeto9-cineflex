# <p align = "center"> Cineflex </p>

<p align="center" style="background-color: white">
   <img src="https://dfg.ai/itemimages/912936910-2-ingressos-para-cinema-RC7P.jpg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
</p>

## :clipboard: Descrição

A aplicação cineflex é uma simulação de site para compra de ingressos de cinema. Com isso, é possível que o usuário escolha um filme dos que estão em cartaz, e selecione um assento disponível. Basta inserir dados de cpf e nome para efetuar o pedido.

---

## :computer: Tecnologias e Conceitos

- REST APIs
- Node.js (v16.17.0)
- JavaScript
- React

---

## :rocket: Rotas

```yml
Endpoint: '/'
    - Rota para selecionar o filme disponível.
```

```yml
Endpoint: '/sessoes/:idFilme'
    - Rota para escolher a seção/horário do filme que deseja assistir.
```

```yml
Endpoint: '/assentos/idSessao'
    - Rota para escolher o assento que deseja na sessão.
```

```yml
Endpoint: '/sucesso'
    - Rota que retorna os dados da compra
```

---

## 🏁 Rodando a aplicação

- Local

O projeto foi inicializado utilizanado [Create React App](https://github.com/facebook/create-react-app), então, verifique se a versão do [Node.js](https:/nodejs.org/en/download/) e [npm](https://www.npmjs.com/) são estáveis e recentes.

Primeiro, clone o repositório do projeto em sua máquina, utilizando o comando abaixo:

```
git clone git@github.com:MatGueler/projeto9-cineflex.git
```

Em seguida, instale todas as dependencias necessárias para a execução da aplicação, com o seguinte comando:

```
npm install
```

Por fim, basta rodar a aplicação em seu terminal pelo comando:

```
npm run start
```
