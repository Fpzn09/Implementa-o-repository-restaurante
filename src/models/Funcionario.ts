export abstract class Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public sexo: string,
    public dataDeContratacao: Date,
    public cpf: string,
    public rg: string
  ) {}

  // Todo funcionário precisa calcular seu salário
  abstract calcularSalario(horasTrabalhadas?: number): number;
}

// Funcionário com Contrato Fixo
export class FuncionarioContratado extends Funcionario {
  constructor(
    id: string,
    nome: string,
    sexo: string,
    dataDeContratacao: Date,
    cpf: string,
    rg: string,
    public salarioFixo: number
  ) {
    super(id, nome, sexo, dataDeContratacao, cpf, rg);
  }

  calcularSalario(): number {
    return this.salarioFixo;
  }
}

// Funcionário Freelancer
export class FuncionarioFreelancer extends Funcionario {
  constructor(
    id: string,
    nome: string,
    sexo: string,
    dataDeContratacao: Date,
    cpf: string,
    rg: string,
    public salarioHora: number,
    public dataLimiteContrato: Date
  ) {
    super(id, nome, sexo, dataDeContratacao, cpf, rg);
  }

  calcularSalario(horasTrabalhadas: number = 0): number {
    return this.salarioHora * horasTrabalhadas;
  }

  // Verifica se o contrato do freelancer ainda está na validade
  isContratoAtivo(dataAtual: Date = new Date()): boolean {
    return this.dataLimiteContrato.getTime() >= dataAtual.getTime();
  }

  // Calcula quantos dias faltam para terminar o contrato
  diasRestantesContrato(dataAtual: Date = new Date()): number {
    const diff = this.dataLimiteContrato.getTime() - dataAtual.getTime();
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  }
}