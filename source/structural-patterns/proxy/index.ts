class Car {
    public drive() {
        return "driving";
    };
}

class CarProxy {
    public driver: Driver;
    constructor(driver: Driver) {
        this.driver = driver;
    }
    public drive() {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver {
    public age: number;
    constructor(age: number) {
        this.age = age;
    }
}

export {
    Car,
    CarProxy,
    Driver
};
