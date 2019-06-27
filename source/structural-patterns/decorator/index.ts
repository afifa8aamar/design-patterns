class Pasta {
    public price: number;
    constructor() {
        this.price = 0;
    }
    public getPrice() {
        return this.price;
    }
}

class Penne extends Pasta {
    constructor() {
        super();
        this.price = 8;
    }
}

class PastaDecorator extends Pasta {
    public pasta: Pasta;
    constructor(pasta: Pasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {
    constructor(pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 5;
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator
};
