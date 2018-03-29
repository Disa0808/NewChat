

module.exports = function(app){

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);

  app.get('/chat', require('./chat').get);

};