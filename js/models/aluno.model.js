// Classes
class AlunoModel {
    constructor({nome, _id, notas} = {notas: {}}) {
        this.nome = nome;
        this._id = _id !== undefined ? _id : this.generateId();
        this.notas = notas;
    }

    generateId() {
        AlunoModel.maxId += 1;
        return AlunoModel.maxId;
    }


}

// Programa Principal
AlunoModel.maxId = 0;
