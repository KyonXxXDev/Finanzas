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

  async getById ({ id }) {
    throw new Error(`${this.repositoryName}: getById() no implementado`);
  }

  async create ({ data }) {
    throw new Error(`${this.repositoryName}: create() no implementado`);
  }

  async update ({ id, data }) {
    throw new Error(`${this.repositoryName}: update() no implementado`);
  }

  async delete ({ id }) {
    throw new Error(`${this.repositoryName}: delete() no implementado`);
  }
}