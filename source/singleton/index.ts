import { Instance } from "./interfaces/Instance";

class Person implements Instance<Person>{
    static instance: any;
    
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;
