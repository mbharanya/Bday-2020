import { Path, POST, Errors } from "typescript-rest";

@Path("/login")
export class LoginService {
  @POST
  login(user: User): object {
    this.parseFavicon(user)
    return { path: "/logged-in.html" }
  }

  parseFavicon(user: User) {
    console.log(user)
    const isValid = user.email == "bday@example.com" && user.password == "secret"
    if (!isValid) {
      throw new Errors.UnauthorizedError("Nope")
    }
  }
}

type User = {
  email: string,
  password: string
}