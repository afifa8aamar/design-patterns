import { IBMW } from "./interfaces/BMW";

class BmwFactory{
    static create(type : string) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements IBMW {
    model: string;
    price: number;
    maxSpeed: number;
    constructor(model: string, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

export default BmwFactory;
