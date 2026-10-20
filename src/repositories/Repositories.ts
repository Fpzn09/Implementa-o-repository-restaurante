import { IRepository } from "./IRepository";
import { Prato } from "../models/Prato";
import { Funcionario } from "../models/Funcionario";
import { Entrega } from "../models/Entrega";

export class PratoRepository implements IRepository<Prato> {
  private items: Prato[] = []; // Array em memória

  adicionar(item: Prato): void { this.items.push(item); }
  buscarPorId(id: string): Prato | undefined { return this.items.find(i => i.id === id); }
  listarTodos(): Prato[] { return [...this.items]; }
}

export class FuncionarioRepository implements IRepository<Funcionario> {
  private items: Funcionario[] = []; // Array em memória

  adicionar(item: Funcionario): void { this.items.push(item); }
  buscarPorId(id: string): Funcionario | undefined { return this.items.find(i => i.id === id); }
  listarTodos(): Funcionario[] { return [...this.items]; }
}

export class EntregaRepository implements IRepository<Entrega> {
  private items: Entrega[] = []; // Array em memória

  adicionar(item: Entrega): void { this.items.push(item); }
  buscarPorId(id: string): Entrega | undefined { return this.items.find(i => i.id === id); }
  listarTodos(): Entrega[] { return [...this.items]; }
}