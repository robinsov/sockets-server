import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import router from "./ROUTES/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//cors
server.app.use( cors({origin: true, credentials: true}) );

//rutas de servicio
server.app.use('/', router);

server.start( () =>{
    console.log(`servdior corriendo en el puertoooo ${SERVER_PORT}`);
});