import { Prato } from "./models/Prato";
import { FuncionarioContratado, FuncionarioFreelancer } from "./models/Funcionario";
import { Entrega } from "./models/Entrega";
import { PratoRepository, FuncionarioRepository, EntregaRepository } from "./repositories/Repositories";
import { RelatorioService } from "./services/RelatorioService";

// Repositórios
const pratoRepo = new PratoRepository();
const funcRepo = new FuncionarioRepository();
const entregaRepo = new EntregaRepository();

//  dados de teste
pratoRepo.adicionar(new Prato("1", "Feijoada", new Date("2026-12-31"), "Brasileira"));
pratoRepo.adicionar(new Prato("2", "Nhoque", new Date("2026-11-20"), "Italiana"));

const f1 = new FuncionarioContratado("F1", "João Silva", "M", new Date("2023-01-01"), "111.111.111-11", "12.345-6", 3000);

const dataFimContrato = new Date();
dataFimContrato.setDate(dataFimContrato.getDate() + 10); // Expira em 10 dias
const f2 = new FuncionarioFreelancer("F2", "Maria Santos", "F", new Date("2026-10-01"), "222.222.222-22", "65.432-1", 50, dataFimContrato);

funcRepo.adicionar(f1);
funcRepo.adicionar(f2);

entregaRepo.adicionar(new Entrega("E1", new Date(), 101, "Rua A, nº 50"));


const relatorios = new RelatorioService(pratoRepo, funcRepo, entregaRepo);

relatorios.relatorioPratos();
relatorios.relatorioFuncionarios();
relatorios.relatorioEntregas();


const mapaHoras = new Map<string, number>();
mapaHoras.set("F2", 160); // Maria trabalhou 160h

relatorios.relatorioSalarios(mapaHoras);
relatorios.verificarContratoFreelancer("F2");