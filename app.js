const http = require('http');

const routes = require('./routes')

const PORT = 8080
const server = http.createServer(routes)

server.listen(PORT, ()=> console.log(`Server runting in port ${PORT}`))