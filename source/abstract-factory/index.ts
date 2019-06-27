import { IKind } from "./interfaces";

function droidProducer(kind: string) {
    if (kind === 'battle'){
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

class B1 implements IKind{
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements IKind {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
