import { ISheep } from "./interfaces";
import { IClonable } from "./interfaces/clone";

class Sheep implements IClonable <Sheep>, ISheep {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
