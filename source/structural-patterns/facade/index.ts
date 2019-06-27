class ShopFacade {
    discount: Discount;
    shipping: Shipping;
    fees: Fees;
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    public calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount {

    public calc(value: number) {
        return value * 0.9;
    }
}

class Shipping {
    public calc() {
        return 5;
    }
}

class Fees {

    public calc(value: number) {
        return value * 1.05;
    }
}

export default ShopFacade;
