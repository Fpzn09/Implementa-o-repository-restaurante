"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregaRepository = exports.FuncionarioRepository = exports.PratoRepository = void 0;
class PratoRepository {
    items = []; // Array em memória
    adicionar(item) { this.items.push(item); }
    buscarPorId(id) { return this.items.find(i => i.id === id); }
    listarTodos() { return [...this.items]; }
}
exports.PratoRepository = PratoRepository;
class FuncionarioRepository {
    items = []; // Array em memória
    adicionar(item) { this.items.push(item); }
    buscarPorId(id) { return this.items.find(i => i.id === id); }
    listarTodos() { return [...this.items]; }
}
exports.FuncionarioRepository = FuncionarioRepository;
class EntregaRepository {
    items = []; // Array em memória
    adicionar(item) { this.items.push(item); }
    buscarPorId(id) { return this.items.find(i => i.id === id); }
    listarTodos() { return [...this.items]; }
}
exports.EntregaRepository = EntregaRepository;
