class Iterator<T> {
    index: number;
    elements: Array<T> ;

    constructor(el: Array<T>) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

export default Iterator;
