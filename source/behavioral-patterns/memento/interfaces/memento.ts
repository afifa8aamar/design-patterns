export interface IMemento<T> {

    addMemento(m: T): void;

    getMemento(i: number): void;
}