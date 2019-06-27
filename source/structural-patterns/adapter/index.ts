class Soldier {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}

class Jedi {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter {
    public jedi: Jedi;
    constructor(jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};
