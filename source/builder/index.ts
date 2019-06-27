import { IRequest , IBuilder } from "./interfaces/";

class Request implements IRequest {
    url: string;
    method: string;
    payload: object;
    
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class RequestBuilder implements IBuilder<RequestBuilder> {
    request: IRequest;
    constructor() {
        this.request = new Request();
    }

    forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;
