class Color {
    public name: string;
    constructor(name: string) {
        this.name = name
    }
}

class colorFactory {
    static colors ;
    constructor(name: string) {
        this.colors = {};
    }
    public create(name: string) {
        let color = this.colors[name];
        if (color) return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    colorFactory
};
