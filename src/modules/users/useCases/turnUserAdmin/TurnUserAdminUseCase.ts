import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userexist = this.usersRepository.findById(user_id);

    if(!userexist) {
      throw new error("user not exists!")  
    }

    cosnt user = this.usersRepository.turnAdmin(userexist);

    return User;
  }
}

export { TurnUserAdminUseCase };
