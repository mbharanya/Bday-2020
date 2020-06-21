import * as express from "express";
import {Server, Path, GET, PathParam} from "typescript-rest";
import {LoginService} from './services/LoginService'
import {LoggedInService} from './services/LoggedInService'


let app: express.Application = express();
Server.buildServices(app, LoginService, LoggedInService);

app.use(express.static('public'))
 
app.listen(3000, function() {
  console.log('Rest Server listening on port 3000!');
});
