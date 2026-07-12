import type { UserService } from "../service/user.service.ts";

export class UserController {
  private userService: UserService;

  constructor ({ userService }: {userService: UserService}) {
    this.userService = userService;
  }
  
  getAll = async (req, res, next) => {
    try {
      const users = await this.userService.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      
    } catch (error) {
      res.status(400).json({ error: error.message });
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
  };
}