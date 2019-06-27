import { IProduct } from "./interfaces/product";

type TDiscount = NumberDiscount | PriceDiscount | NoneDiscount | null;

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

class NumberDiscount {
    next: TDiscount;

    constructor() {
        this.next = null;
    }

    setNext(fn: TDiscount) {
        this.next = fn;
    };

    exec(products: IProduct[]): number {
        let result = 0;
        if (products.length > 3)
            result = 0.05;
        if (this.next){
            return result + this.next.exec(products);
        } else {
            return result;
        }
    };
}

class PriceDiscount {
    next: TDiscount;

    constructor() {
        this.next = null;
    }

    setNext(fn: TDiscount) {
        this.next = fn;
    };

    exec(products: IProduct[]):number {
        let result = 0;
        let total = products.reduce((a: number, b: number) => a + b);

        if (total >= 500)
            result = 0.1;

        if (this.next){
            return result + this.next.exec(products);
        } else {
            return result;
        }
    };
}

class NoneDiscount {
    exec():number {
        return 0;
    };
}

export {
    ShoppingCart,
    Discount
};
