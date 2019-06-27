import { IBuilder, IRequest } from "./interfaces";

class Request implements IRequest {
    public url: string;
    public method: string;
    public payload: object;

    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}

class RequestBuilder implements IBuilder<RequestBuilder> {
    public request: IRequest;
    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}

export default RequestBuilder;
