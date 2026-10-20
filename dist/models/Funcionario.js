"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioFreelancer = exports.FuncionarioContratado = exports.Funcionario = void 0;
class Funcionario {
    id;
    nome;
    sexo;
    dataDeContratacao;
    cpf;
    rg;
    constructor(id, nome, sexo, dataDeContratacao, cpf, rg) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.dataDeContratacao = dataDeContratacao;
        this.cpf = cpf;
        this.rg = rg;
    }
}
exports.Funcionario = Funcionario;
// Funcionário com Contrato Fixo
class FuncionarioContratado extends Funcionario {
    salarioFixo;
    constructor(id, nome, sexo, dataDeContratacao, cpf, rg, salarioFixo) {
        super(id, nome, sexo, dataDeContratacao, cpf, rg);
        this.salarioFixo = salarioFixo;
    }
    calcularSalario() {
        return this.salarioFixo;
    }
}
exports.FuncionarioContratado = FuncionarioContratado;
// Funcionário Freelancer
class FuncionarioFreelancer extends Funcionario {
    salarioHora;
    dataLimiteContrato;
    constructor(id, nome, sexo, dataDeContratacao, cpf, rg, salarioHora, dataLimiteContrato) {
        super(id, nome, sexo, dataDeContratacao, cpf, rg);
        this.salarioHora = salarioHora;
        this.dataLimiteContrato = dataLimiteContrato;
    }
    calcularSalario(horasTrabalhadas = 0) {
        return this.salarioHora * horasTrabalhadas;
    }
    // Verifica se o contrato do freelancer ainda está na validade
    isContratoAtivo(dataAtual = new Date()) {
        return this.dataLimiteContrato.getTime() >= dataAtual.getTime();
    }
    // Calcula quantos dias faltam para terminar o contrato
    diasRestantesContrato(dataAtual = new Date()) {
        const diff = this.dataLimiteContrato.getTime() - dataAtual.getTime();
        return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
    }
}
exports.FuncionarioFreelancer = FuncionarioFreelancer;
