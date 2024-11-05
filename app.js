const http = require('http');
const taskRoutes = require('./routes/taskRouts');

const HOSTNAME = 'location'
const PORT = 9000;

const server = http.createServer((req, rest) =>{
    if(req.url.startsWith('/tasks')) {
        taskRoutes(req, rest)

    }else{
        res.writeHead(404, 'not found', {'content-type': 'application/json'})
        res.end(JSON.stringify({
            message: 'sorry, you got lost!'

        }))
    }
});

server.listen(PORT,HOSTNAME, () => {
   console.log('sever runnig on port ${PORT}');
    
})
