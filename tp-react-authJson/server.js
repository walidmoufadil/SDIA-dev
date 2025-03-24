import jsonServer from 'json-server';
import auth from 'json-server-auth';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Règles d'authentification
const rules = auth.rewriter({
  'users': '/users',
});

server.db = router.db;



server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server avec authentification est en cours d\'exécution sur le port 3000');
}); 

