// Objeto Alunos
const alunos = [
    {
      nome: "Marcos Costa",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [10, 8.8, 9.3, 10],
        bancodados: [3, 2.7, 5.4, 5],
        ferramentas: [8, 8.6, 5, 7],
      },
    },
    {
      nome: "Talita Lima",
      notas: {
        backend_1: [4, 5, 7.7, 5],
        frontend_2: [9.4, 10, 5.8, 7.9],
        bancodados: [5.5, 5, 6.8, 6.6],
        ferramentas: [7.4, 7, 8, 9.6],
      },
    },
    {
      nome: "João da Silva",
      notas: {
        backend_1: [6, 7, 8, 9],
        frontend_2: [10, 9.5, 8.5, 7.5],
        bancodados: [5, 6, 7, 8],
        ferramentas: [8, 9, 10, 7],
      },
    },
  ];

const alunoService = new AlunoService();

alunos.forEach(aluno => {
    aluno.media = [];
    
    for (let materia in aluno.notas) {
        aluno.media[materia] = average(...aluno.notas[materia]);
    }
});

const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'));
const alunoController = new AlunoController(alunoService, alunoView);
