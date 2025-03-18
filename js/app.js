// Objeto Alunos
const alunos = [
    {
      _id: 0,
      nome: "Marcos Costa",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [10, 8.8, 9.3, 10],
        bancodados: [3, 2.7, 5.4, 5],
        ferramentas: [8, 8.6, 5, 7],
      },
    },
    {
      _id: 1,
      nome: "Talita Lima",
      notas: {
        backend_1: [4, 5, 7.7, 5],
        frontend_2: [9.4, 10, 5.8, 7.9],
        bancodados: [5.5, 5, 6.8, 6.6],
        ferramentas: [7.4, 7, 8, 9.6],
      },
    },
    {
      _id: 2,
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

// Funções
alunos.forEach(aluno => {
    aluno.media = [];
    
    for (let materia in aluno.notas) {
        aluno.media[materia] = average(...aluno.notas[materia]);
    }
});

// Inserir no Thead da tabela a lista de alunos
const htmlHeader = document.createElement('tr');
htmlHeader.innerHTML = '<td>Nome</td>';

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    return `<td>${materia}</td>`;
}).join('');

htmlHeader.innerHTML += htmlHeaderMaterias;
document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader);

// Inserir no Tbody da tabela a lista de alunos e suas médias
function render() {
    document.querySelector('[data-table-alunos] tbody').innerHTML = '';

    alunos.forEach(aluno => {
        let htmlRow = document.createElement('tr');
        htmlRow.innerHTML = `<td>${aluno.nome}</td>`;
        
        let htmlRowMaterias = Object.keys(aluno.media).map(materia => {
            return `<td>${aluno.media[materia]}</td>`;
        }).join('');
        htmlRow.innerHTML += htmlRowMaterias;
        document.querySelector('[data-table-alunos] tbody').appendChild(htmlRow); 
    });
}

render();

// Inserir aluno
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('first_name').value;
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backend_1: [6, 6, 6, 6],
            frontend_2: [7, 7, 7, 7],
            bancodados: [6, 6, 6, 6],
            ferramentas: [7, 7, 7, 7]
        }
    };

    newAluno.media = {};
    for (let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia]);
    };

    alunos.push(newAluno);
    render();
});
