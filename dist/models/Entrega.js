"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrega = void 0;
class Entrega {
    id;
    dataHoraSaida;
    numeroPedido;
    endereco;
    constructor(id, dataHoraSaida, numeroPedido, endereco) {
        this.id = id;
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}
exports.Entrega = Entrega;
