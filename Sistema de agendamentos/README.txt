Sistema de Agendamento
Este projeto é uma aplicação web para um salão de beleza fictício, onde clientes podem agendar serviços de cabelo, visualizar agendamentos e um painel de administração para gerenciar os agendamentos. A aplicação possui uma interface simples, com formulários de agendamento e uma área de administração (embora com limitações).

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

bash
Copiar código
/agendamento
  /backend
    server.js            # Backend da aplicação, responsável pela API e manipulação de dados
    agendamentos.json     # Arquivo JSON que armazena os agendamentos
    node_modules/         # Dependências do projeto
    package.json          # Configuração do Node.js e dependências
    package-lock.json     # Registro das versões exatas das dependências
  /public
    /css
      styles.css          # Estilos da aplicação
    /js
      script.js           # Lógica do frontend (agendamento, exibição de agendamentos)
    index.html            # Página principal de agendamentos
    login.html            # Página de login (não funcional atualmente)
    admin.html            # Página de administração (não funcional atualmente)
Tecnologias Usadas
Frontend: HTML, CSS, JavaScript

index.html: Página de agendamentos.
login.html: Tela de login (não funcional).
admin.html: Tela de administração (não funcional).
styles.css: Estilos básicos da aplicação.
script.js: Lógica de agendamento e exibição de agendamentos.
Backend: Node.js com Express

server.js: Configuração do servidor e rotas.
agendamentos.json: Armazena os agendamentos como um arquivo JSON.
express: Framework para facilitar a criação do servidor e das rotas.
body-parser: Middleware para processar dados de formulários.
Instruções para Rodar o Projeto
1. Instalar Dependências
Clone o repositório para o seu computador e navegue até o diretório backend:

2. Rodar o Backend
Após instalar as dependências, inicie o servidor.
O servidor será iniciado na porta 3001 por padrão, e você pode acessá-lo via http://localhost:3001.

3. Acessar a Aplicação
Acesse o frontend da aplicação navegando até o diretório public e abrindo o arquivo index.html no navegador.
Para usar a página de login e administração, acesse diretamente os arquivos login.html e admin.html no navegador. No entanto, essas funcionalidades não estão totalmente implementadas, como explicado a seguir.
Funcionalidades
Funcionalidades Implementadas
Agendamento de Serviço: Os usuários podem preencher um formulário para agendar serviços. Os agendamentos são salvos em um arquivo JSON.
Visualização de Agendamentos: Os agendamentos realizados são exibidos na página principal, permitindo aos usuários visualizar os serviços agendados.
Funcionalidades Não Implementadas ou Com Problemas
Tela de Login: A funcionalidade de login não está funcional. O sistema de login não possui backend implementado, portanto, qualquer entrada de usuário e senha não tem efeito real.
Tela de Administração: A página de administração (admin.html) também não está funcional, pois não foi implementada uma lógica para autenticação ou manipulação dos dados de agendamentos a partir dessa página.
Observações
O projeto ainda está em fase de desenvolvimento e possui algumas funcionalidades que não foram implementadas por completo.
A API de agendamentos (/appointments) funciona corretamente, permitindo criar e visualizar agendamentos. No entanto, a parte de administração e autenticação ainda está incompleta.
Possíveis Melhorias
Autenticação e Autorização: Implementar autenticação para o login e proteção de rotas na página de administração.
Persistência de Dados: Melhorar a persistência dos dados usando um banco de dados em vez de um arquivo JSON, permitindo escalabilidade e maior segurança.
Administração: Completar a funcionalidade de administração para permitir a edição e remoção de agendamentos diretamente na interface do administrador.