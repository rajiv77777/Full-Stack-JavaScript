import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();
console.info('Express server is starting at port ->', config.port);

server.listen(config.port, () =>{
    console.info('Express server is started and listening to port', config.port);
})

server.set('view engine', 'ejs');

server.get('/', (req ,res) => {
    res.render("index", {
        content: "Hello express I'm EJS from server.js"
    });
});

server.use(express.static('public'));

server.use('/api', apiRouter);