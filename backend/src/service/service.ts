import { Repository } from "../repository/repository.ts";

export class Service {
  private serviceName: string;
  private repository: Repository;
  constructor ({ repository, serviceName }: { repository: Repository, serviceName: string }) {
    if (new.target === Service) throw new Error('No se puede instanciar de una clase abstracta...');
    this.serviceName = serviceName;
    this.repository = repository;
  }

  getAll = async () => {
    return this.repository.getAll();
  };

  getById = async ({ id }: { id: string }) => {
    return this.repository.getById({ id });
  };

  create = async ({ data }: { data: any }) => {
    return this.repository.create({ data });
  };

  update = async ({ id, data }: { id: string, data: any }) => {
    return this.repository.update({ id, data });
  };

  delete = async ({ id }: { id: string }) => {
    return this.repository.delete({ id });
  };
}
