import { IMemento } from "./interfaces/memento";

class Memento {
    value: Memento;
    constructor(value: Memento) {
        this.value = value;
    }
}

const originator = {
    store: function(val: Memento) {
        return new Memento(val);
    },
    restore: function(memento: Memento) {
        return memento.value;
    }
};

class Caretaker implements IMemento<Caretaker>{
    public values: Array<Caretaker>;

    constructor() {
        this.values = [];
    }

    public addMemento(memento: Caretaker) {
        this.values.push(memento);
    }

    public getMemento(index: number) {
        return this.values[index];
    }
}

export {
    originator,
    Caretaker
};
