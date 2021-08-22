import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const {user_id} = request.headers;

      const user = this.listAllUsersUseCase.execute({ user_id: String(user_id)})

      return response.status(200).json(user);
    }  catch (error)  {
      return response.status(400).json({error: "user is not admin"});
    }
  }
}

export { ListAllUsersController };
