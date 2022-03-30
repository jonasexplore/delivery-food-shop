<p align="center">
Delivery Food
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mpgxc/delivery-food-shop?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mpgxc/delivery-food-shop">

  <a href="https://github.com/fallying/c-uol/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mpgxc/delivery-food-shop">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/mpgxc/delivery-food-shop/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/mpgxc/delivery-food-shop?style=social">
  </a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-endpoints">Endpoints</a> •
 <a href="#-banco-de-dados">Banco de dados</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-como-executar-os-testes">Testes</a> •
</p>

## 💻 Sobre o projeto

Delivery Food é uma API que busca simular o fluxo completo de um serviço de
delivery de comida. Os estabelecimentos realizam o cadastro na plataforma,
informam seus cardápios e as zonas de disponibilidade e dessa forma os clientes
conseguem encontra-los e realizar pedidos.

---

## 🛠 Endpoints

> Not available in the moment :)

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest)

## 🎨 Banco de dados

> Not available in the moment :)

---

## 🚀 Como executar o projeto

> Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
> [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
> Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando a aplicação sem o docker

Instale as dependências

```powershell
yarn
```

Crie um banco de dados e altere as credenciais de acesso no .env

```env
mongodb://username:password@host/database?schema=public
```

Execute a aplicação

```powershell
yarn start:dev
```

## 🚀 Como executar os testes

Rode o seguinte script

```bash
yarn test
```
