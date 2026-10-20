"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prato = void 0;
class Prato {
    id;
    nome;
    dataDeValidade;
    nacionalidade;
    constructor(id, nome, dataDeValidade, nacionalidade) {
        this.id = id;
        this.nome = nome;
        this.dataDeValidade = dataDeValidade;
        this.nacionalidade = nacionalidade;
    }
}
exports.Prato = Prato;
