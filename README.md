# TODO app com React and Rails back-end

Essa é uma ToDo List feita com [Reactjs](https://reactjs.org/) no front-end e [Rails](http://rubyonrails.org/) no back-end como API.

Link para o [live example].

Quer rodar essa aplicação localmente? Clone o repositório, entre na pasta clonada e siga os passos abaixo.

    bundle install
    cd client
    npm install
    cd ..
    bin/rake start
    
O servidor estará rodando na porta [3001](http://localhost:3001/) e o cliente na porta [3000](http://localhost:3000/). Todos os testes podem ser feitos rodando em [localhost:3000](http://localhost:3000/).

### Tecnologias utilizadas

* [ReactJS](https://reactjs.org/) no front-end da aplicação
* [Redux](https://redux.js.org/) para persistência client-side
* [Axios](https://github.com/axios/axios) para busca de dados na API do Rails
* [Rails](http://rubyonrails.org/) em sua versão dedicada a construção de APIs
* [SQLite3](https://www.sqlite.org/) como banco de dados de desenvolvimento
* [PostgreSql](https://www.postgresql.org/?&) como banco de dados de produção