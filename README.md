![Capa](https://user-images.githubusercontent.com/55336456/168946242-3d8b38cb-b17a-433e-bc04-18b1484b82f3.png)

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=return&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nlw-return?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nlw-return?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/nlw-return?color=blueviolet&style=for-the-badge">
</p>
<br />

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#feedbackwidget">Feedback Widget</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br />

## Sobre

Projeto desenvolvido durante a <strong>NLW Return</strong>, evento criado pela <strong><a href="https://rocketseat.com.br/">Rocketseat</a></strong>.  
 Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 02 ao dia 08 de Maio de 2022 e teve como intuito mostrar na prática o poder da stack
<strong><a href="https://nodejs.org/pt-br/">NodeJS</a></strong> +
<strong><a href="https://pt-br.reactjs.org/">ReactJS</a></strong> +
<strong><a href="https://reactnative.dev">React Native</a></strong> e como essas tecnologias podem te levar até os seus maiores objetivos como programador.

## FeedbackWidget

O Feedback widget é uma aplicação disponibilizada para os usuários terem contato com o time de desenvolvimento para que possam falar sobre problemas, repassar alguma ideia que tenham ou falar sobre outros assuntos. A aplicação está disponível tanto na web quanto no mobile e possui as mesmas funcionalidades em ambas as plataformas.

Vamos ver abaixo na pratica como tudo funciona...😎

### Widget na web

Ao acessar a página que contenha o widget teremos no canto inferior direito nossa funcionalidade, conforme imagem a seguir:

![Widget fechado](./readme/widget.png)

Ao clicar no widget, as opções disponíveis serão exibidas para o usuário:

![Widget aberto](./readme/widget-open.png)

Ao escolher a opção desejada, o usuário terá um pequeno formulário contendo um campo de texto para ele digitar sua mensagem para os desenvolvedores e um botão para tirar um printScreen para anexar na mensagem dele, conforme exemplificado abaixo:

![Widget com opção selecionada](./readme/widget-option-open.png)

Feito isso, basta enviar o feedback e, após a tela de confirmação abaixo, bastará aguardar contato da equipe responsável: 🙃

![Feedback enviado](./readme/feedback-sended.png)

Vamos acompanhar o fluxo completo no GIF abaixo e ver a simplicidade e agilidade que a aplicação entrega para a funcionalidade proposta:

![Exemplo de cadastro de feedback](./readme/widget-example.gif)

### Widget no mobile

No mobile o funcionamento é o mesmo. Na página aonde o widget está adicionado teremos o seguinte:

<img src="./readme/widget-mobile.png" alt="Widget fechado" height="400px" />

Após clicar no widget ele será aberto e teremos as três opções disponíveis:

<img src="./readme/widget-open-mobile.png" alt="Widget aberto" height="400px" />

Ao clicar na opção desejada o formulário de feedback será exibido na tela com o campo de texto e o botão para tirar um printScreen da tela:

<img src="./readme/widget-example-mobile.png" alt="Widget com opção selecionada" height="400px" />

Após escrever nossa mensagem à equipe responsável e adicionar nossa evidência, teremos a mensagem a seguir para confirmar que o feedback foi enviado com sucesso:

<img src="./readme/feedback-sended-mobile.png" alt="Feedback enviado" height="400px" />

E pronto, nosso feedback foi enviado para a equipe responsável com todas as informações preenchidas! 🙃

Abaixo um exemplo do fluxo de feedback completo para exemplificar a facilidade e agilidade do widget para concessão de feedbacks:

<img src="./readme/widget-example-mobile.gif" alt="Exemplo de cadastro de feedback" height="400px" />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-return.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-return

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3333 ou na porta definida no arquivo .env na variável APP_PORT - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-return.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-return

# Vá para a pasta server
$ cd web

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3000 - acesse <http://localhost:3000>
```

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-return.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-return

# Vá para a pasta server
$ cd mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ expo start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png" alt="Expo" height="75" />

<br><br><br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
