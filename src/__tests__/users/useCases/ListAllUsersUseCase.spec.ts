import { v4 } from "uuid";

import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";
import { ListAllUsersUseCase } from "../../../modules/users/useCases/listAllUsers/ListAllUsersUseCase";

describe("ListAllUsersUseCase", () => {
  let usersRepository: UsersRepository;
  let listAllUsersUseCase: ListAllUsersUseCase;
  let userId: string;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    listAllUsersUseCase = new ListAllUsersUseCase(UsersRepository);
  });

  it("should be able to list all users", () => {
    const user1 = UsersRepository.create({
      name: "Danilo Vieira",
      email: "danilo@rocketseat.com",
    });

    const user2 = UsersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    userId = user2.id;

    const user3 = UsersRepository.create({
      name: "Joseph Oliveira",
      email: "dogim@rocketseat.com",
    });

    UsersRepository.turnAdmin(user1);

    const users = listAllUsersUseCase.execute({ user_id: user1.id });

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Danilo Vieira",
          email: "danilo@rocketseat.com",
        }),
        user2,
        user3,
      ])
    );
  });

  it("should not be able to a non admin user get list of all users", () => {
    expect(() => {
      listAllUsersUseCase.execute({ user_id: userId });
    }).toThrow();
  });

  it("should not be able to a non existing user get list of all users", () => {
    expect(() => {
      listAllUsersUseCase.execute({ user_id: v4() });
    }).toThrow();
  });
});
