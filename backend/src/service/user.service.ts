import { Service } from './service.ts';
import { UserRepository } from '../repository/user.repository.ts';
import type { User } from '../types/types.ts';

export class UserService extends Service {
  private userRepository: UserRepository;
  
  constructor (userRepository: UserRepository) {
    super({ repository: userRepository, serviceName: 'user' });
    this.userRepository = userRepository;
  }

  getAll = async () => {
    return this.userRepository.getAll();
  };

  getById = async ({ id }: { id: string }) => {
    return this.userRepository.getById({ id });
  };

  create = async ({ data }: {data: User}) => {
    return this.userRepository.create({ data });
  };

  update = async ({ id, data }: {id: string, data: User}) => {
    return this.userRepository.update({ id, data });
  };

  delete = async ({ id }: {id: string}) => {
    return this.userRepository.delete({ id });
  };
}
