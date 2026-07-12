import { Pool } from 'pg';

export class Repository {
  private connection: Pool;
  private repositoryName: string;

  constructor ({ connection, repositoryName }: { connection: Pool, repositoryName: string }) {
    if (new.target === Repository) throw new Error('No se puede instanciar de una clase abstracta...');
    this.connection = connection;
    this.repositoryName = repositoryName;
  }
  newTarget () {
    return this.constructor;
  }

  async getAll () {
    throw new Error(`${this.repositoryName}: getAll() no implementado`);
  }

  async getById ({ id }: {id: string}) {
    throw new Error(`${this.repositoryName}: getById() no implementado`);
  }

  async create ({ data }: {data: any}) {
    throw new Error(`${this.repositoryName}: create() no implementado`);
  }

  async update ({ id, data }: {id: string, data: any}) {
    throw new Error(`${this.repositoryName}: update() no implementado`);
  }

  async delete ({ id }: {id: string}) {
    throw new Error(`${this.repositoryName}: delete() no implementado`);
  }
}