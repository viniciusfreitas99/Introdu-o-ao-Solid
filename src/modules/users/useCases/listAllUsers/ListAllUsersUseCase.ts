import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if(!user) {
      throw new error (" user not exists! ")
    }

    return user;
  
    const userExist = this.usersRepository.findById(user_id);
    
    if(!userExist) {
      throw new Error ("user not exists");
    }

    const userIsadmin = userExist.admin;

    if(userIsadmin === false)  {
      throw new error ("user is not a admin")
    }

    const user = this.usersRepository.list();

    return user;
  }
}

export { ListAllUsersUseCase };
