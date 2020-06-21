import { Server, Path, GET, PathParam, POST, Param } from "typescript-rest";

@Path("/login")
export class LoginService {
  @POST
  sayHello(user: User): string {
    console.log(user)
    return JSON.stringify(user);
  }
}

type User = {
  email: string,
  password: string
}