class Sum {
    left: Num;
    right: Num;
    constructor(left: Num, right: Num) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

class Min {
    left: Num;
    right: Num;

    constructor(left: Num, right: Num) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}

class Num {
    val: number;

    constructor(val: number) {
        this.val = val;
    }

    interpret() {
        return this.val;
    }
}

export {
    Num,
    Min,
    Sum
};
