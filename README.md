

# **Projeto Store Manager**

## **Descrição**

Este projeto consiste no desenvolvimento de uma API para gerenciamento de vendas utilizando a arquitetura MSC (model-service-controller) e banco de dados MySQL. A API segue os princípios do REST e permite criar, visualizar, deletar e atualizar produtos e vendas. O projeto utiliza TDD para o desenvolvimento das funcionalidades.


### Hugo de Sousa Silva
linkedin: https://www.linkedin.com/in/hugo-de-sousa-dev/
<br>

## **Funcionalidades**

- Listar produtos
- Cadastrar produtos
- Validar dados do produto
- Validar e cadastrar vendas
- Listar vendas
- Atualizar um produto
- Deletar um produto

<br>

## **Tecnologias**

- Node.js
- MySQL
- Jest
- Express

<br>

## **Instalação**

- Clone este repositório em sua máquina
- Rode os serviços **node e db** com o comando `docker-compose up -d --build`. Esses serviços irão inicializar um container chamado **store_manager** e outro chamado **store_manager_db**.
- Use o comando `docker exec -it store_manager bash` para acessar o terminal interativo do container.
- Instale as dependências com o comando `npm install` dentro do container.
- **OBS: Para criar as tebelas e popular o banco de dados e precisso rodar os arquivos migration.sql e seed.sql que estao na raiz no projeto, pode se usar um programa como `MySQL Workbench` para fazer isso.**.
- Inicie o servidor com o comando `npm start`.

<br>

## **Endpoints**

### **Produtos**

- **`GET /produtos`** - lista todos os produtos cadastrados
- **`POST /produtos`** - cadastra um novo produto
- **`PUT /produtos/:id`** - atualiza um produto pelo id especificado
- **`DELETE /produtos/:id`** - deleta um produto pelo id especificado

### **Vendas**

- **`POST /vendas`** - cadastra uma nova venda
- **`GET /vendas`** - lista todas as vendas cadastradas

<br>

### **Validações**

- A validação de produtos é realizada antes de criar ou atualizar um produto. Caso haja erros de validação, a API retorna uma mensagem de erro com os campos que precisam ser corrigidos.

<br>

### **Testes**

- O projeto utiliza TDD para o desenvolvimento das funcionalidades. Os testes cobrem no mínimo 25% das camadas da aplicação.

<br>

### **Referências**

- O projeto foi desenvolvido seguindo as melhores práticas da documentação oficial do Node.js e do Express.

- O projeto base foi desenvolfido pela trybe.