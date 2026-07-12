import { Router } from "express";

import { UserController } from "../controller/user.controller.ts";
import { UserService } from "../service/user.service.ts";
import { UserRepository } from "../repository/user.repository.ts";
import { connection } from "../utils/connection-db.ts";

const userRepository = new UserRepository({ connection, repositoryName: 'user'})

const userController =  new UserController({
  userService: new UserService({
    userRepository: new UserRepository({connection, repositoryName: 'user'})
  })
})

export function createUserRouter () {
  const router = new Router();

  router.get('/', userController.getAll);

  router.post('/', userController.create);

  router.put('/:id', userController.update);

  router.patch('/:id', userController.update);

  router.delete('/:id', userController.delete);

  router.get('/:id', userController.getById);

  return router;
}