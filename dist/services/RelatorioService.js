"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioService = void 0;
const Funcionario_1 = require("../models/Funcionario");
class RelatorioService {
    pratoRepo;
    funcRepo;
    entregaRepo;
    constructor(pratoRepo, funcRepo, entregaRepo) {
        this.pratoRepo = pratoRepo;
        this.funcRepo = funcRepo;
        this.entregaRepo = entregaRepo;
    }
    relatorioPratos() {
        console.log("\n--- RELATÓRIO DE PRATOS ---");
        this.pratoRepo.listarTodos().forEach(p => {
            console.log(`Prato: ${p.nome} | Validade: ${p.dataDeValidade.toLocaleDateString("pt-BR")} | Origem: ${p.nacionalidade}`);
        });
    }
    relatorioFuncionarios() {
        console.log("\n--- RELATÓRIO DE FUNCIONÁRIOS ---");
        this.funcRepo.listarTodos().forEach(f => {
            const tipo = f instanceof Funcionario_1.FuncionarioContratado ? "Contratado" : "Freelancer";
            console.log(`Nome: ${f.nome} | Sexo: ${f.sexo} | CPF: ${f.cpf} | RG: ${f.rg} | Tipo: ${tipo}`);
        });
    }
    relatorioEntregas() {
        console.log("\n--- RELATÓRIO DE ENTREGAS ---");
        this.entregaRepo.listarTodos().forEach(e => {
            console.log(`Saída: ${e.dataHoraSaida.toLocaleString("pt-BR")} | Pedido nº: ${e.numeroPedido} | Endereço: ${e.endereco}`);
        });
    }
    relatorioSalarios(horasTrabalhadas) {
        console.log("\n--- RELATÓRIO DE SALÁRIOS ---");
        this.funcRepo.listarTodos().forEach(f => {
            if (f instanceof Funcionario_1.FuncionarioContratado) {
                console.log(`[Contratado] ${f.nome} | Salário Fixo: R$ ${f.calcularSalario().toFixed(2)}`);
            }
            else if (f instanceof Funcionario_1.FuncionarioFreelancer) {
                const horas = horasTrabalhadas.get(f.id) || 0;
                console.log(`[Freelancer] ${f.nome} | Horas: ${horas}h | Salário A Receber: R$ ${f.calcularSalario(horas).toFixed(2)}`);
            }
        });
    }
    verificarContratoFreelancer(id) {
        console.log("\n--- STATUS DO CONTRATO FREELANCER ---");
        const func = this.funcRepo.buscarPorId(id);
        if (func && func instanceof Funcionario_1.FuncionarioFreelancer) {
            console.log(`Freelancer: ${func.nome}`);
            console.log(`Contrato Ativo? ${func.isContratoAtivo() ? "Sim" : "Não"}`);
            console.log(`Dias restantes de contrato: ${func.diasRestantesContrato()} dia(s)`);
        }
        else {
            console.log("Freelancer não encontrado.");
        }
    }
}
exports.RelatorioService = RelatorioService;
