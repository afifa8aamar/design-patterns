import {IProduct} from "./interfaces/product"
import { IDiscount } from "./interfaces/discount";
class ShoppingCart {
    products: IProduct[];

    constructor() {
        this.products = [];
    }

    addProduct(p: IProduct) {
        this.products.push(p);
    };
}

class Discount {

    calc(products: IProduct[]) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount implements IDiscount<NumberDiscount> {
    next: NumberDiscount | null;

    constructor() {
        this.next = null;
    }

    setNext(fn: NumberDiscount) {
        this.next = fn;
    };

    exec(products: IProduct[]): number {
        let result = 0;
        if (products.length > 3)
            result = 0.05;
        let temp: NumberDiscount = <NumberDiscount>this.next;
        return result + temp.exec(products);
    };
}

class PriceDiscount implements IDiscount<PriceDiscount> {
    next : PriceDiscount | null;
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products : IProduct[]) {
        let result = 0;
        let total = products.reduce((a: number, b: number) => a + b);

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}

export {
    ShoppingCart,
    Discount
};
