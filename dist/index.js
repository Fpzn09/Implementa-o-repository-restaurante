"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prato_1 = require("./models/Prato");
const Funcionario_1 = require("./models/Funcionario");
const Entrega_1 = require("./models/Entrega");
const Repositories_1 = require("./repositories/Repositories");
const RelatorioService_1 = require("./services/RelatorioService");
// Repositórios
const pratoRepo = new Repositories_1.PratoRepository();
const funcRepo = new Repositories_1.FuncionarioRepository();
const entregaRepo = new Repositories_1.EntregaRepository();
//  dados de teste
pratoRepo.adicionar(new Prato_1.Prato("1", "Feijoada", new Date("2026-12-31"), "Brasileira"));
pratoRepo.adicionar(new Prato_1.Prato("2", "Nhoque", new Date("2026-11-20"), "Italiana"));
const f1 = new Funcionario_1.FuncionarioContratado("F1", "João Silva", "M", new Date("2023-01-01"), "111.111.111-11", "12.345-6", 3000);
const dataFimContrato = new Date();
dataFimContrato.setDate(dataFimContrato.getDate() + 10); // Expira em 10 dias
const f2 = new Funcionario_1.FuncionarioFreelancer("F2", "Maria Santos", "F", new Date("2026-10-01"), "222.222.222-22", "65.432-1", 50, dataFimContrato);
funcRepo.adicionar(f1);
funcRepo.adicionar(f2);
entregaRepo.adicionar(new Entrega_1.Entrega("E1", new Date(), 101, "Rua A, nº 50"));
const relatorios = new RelatorioService_1.RelatorioService(pratoRepo, funcRepo, entregaRepo);
relatorios.relatorioPratos();
relatorios.relatorioFuncionarios();
relatorios.relatorioEntregas();
const mapaHoras = new Map();
mapaHoras.set("F2", 160); // Maria trabalhou 160h
relatorios.relatorioSalarios(mapaHoras);
relatorios.verificarContratoFreelancer("F2");
