import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    import { response } from "express";
    import { user } from "../../model/User";
    import { IUsersRepository } from "../../repositories/IUsersRepository";
  }
}

export { CreateUserUseCase };
