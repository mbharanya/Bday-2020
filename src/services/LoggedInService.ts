import { Path, GET } from "typescript-rest";
import md5 = require('md5');


@Path("/logged-in/users")
export class LoggedInService {
    @GET
    getUsers(){
        const salt = "🧂"
        return [
            {
                email: "bday@example.com",
                password: md5("secret" + salt) 
            },
            {
                email: "admin@example.com",
                password: md5("happy"+ salt)
            }
        ]
    }
}

