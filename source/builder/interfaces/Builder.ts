import { IRequest } from "./Request";

export interface IBuilder<T> {

    forUrl(url: string): T ;

    useMethod(method: string): T ;

    payload(payload: object): T ;

    build(): IRequest ;
}
