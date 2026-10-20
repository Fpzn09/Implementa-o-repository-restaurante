export class Entrega {
  constructor(
    public id: string,
    public dataHoraSaida: Date,
    public numeroPedido: number,
    public endereco: string
  ) {}
}