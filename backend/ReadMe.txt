#npm init -y -> Cria o package.json.
#yarn add express -> objeto para rotas.
#npx create-react-app frontend -> cria um app react
#Insomnia -> New Request
#yarn add nodemon -> objeto para rodar a aplicação em tempo real * Necessida chamar o script no package.json
#yarn run -> starta servidor
#KnexJS -> Query builder

/**
 routes.get('/users', (request, response) =>{ //Query params
     const querys = request.query;
     console.log(querys);
     return response.json({
         evento: 'Semana OmniStack 11.0',
         aluno: 'Daniel Wanelle'
     });
 });
 routes.get('/users/:id', (request, response) =>{ //Route params
     const params = request.params;
     console.log(params);
     return response.json({
         evento: 'Semana OmniStack 11.0',
         aluno: 'Daniel Wanelle'
     });
 });
 routes.post('/users', (request, response) =>{ //Request body
     const body = request.body;
     console.log(body);
     return response.json(body);
 });
 */