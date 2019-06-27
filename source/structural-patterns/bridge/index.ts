class Printer {
    public ink: Ink;
    constructor(ink: Ink) {
        this.ink = ink;
    }
}

class EpsonPrinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink {
    public type: string;
    constructor(type: string) {
        this.type = type;
    }
    public get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk
};
