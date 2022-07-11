# docker-node-mysql-nginx

## Criação de uma aplicação node com mysql e nginx como proxy reverso usando docker e docker-compose
  - Utilização de Dockerfile para construir as imagens do node, mysql e nginx
  - Utilização de docker-compose para subir todos os containers

## Como executar a aplicação:
  1- na raiz do projeto, execute: `docker-compose up -d`
  
  2- abra o navegador com o endereço: `http://localhost:8080`

OBS.:
  - A aplicação consome dados do database `nodedb` na tabela `people`, que tem a seguinte estrutura:

| Field | Type | Null | Key | Default | Extra |
| id | int | NO | PRI | NULL | auto_increment |
| name | varchar(255) | YES |  | NULL |  |
