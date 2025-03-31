class MateriaService {
    constructor() {
        this.materias = [];
        this.updateListMateriasFromLocalStorage();
    };

    add(materia) {
        if(!materia instanceof MateriaModel) {
            throw new Error('A matéria deve ser uma instância de MateriaModel');
        };

        this.materias.push(materia);
        this.updateLoacalStorage();
    };

    update(materia) {
        return materia;
    };

    searchById(id) {
        return this.materias.find(materia => materia._id === id);
    };

    getAll() {
        return this.materias;
    };

    updateLoacalStorage() {
        let materias = JSON.stringify(this.materias);
        localStorage.setItem('materias', materias);
    };

    updateListMateriasFromLocalStorage() {
        let local = localStorage.getItem('materias');
        let materias = [];

        if(local) {
            materias = JSON.parse(local);
        };

        materias.forEach(materia => {
            this.add(new MateriaModel(materia));
        });
    };
};
