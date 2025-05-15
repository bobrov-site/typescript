enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
}

interface HttpHeaders {
    [key: string]: string;
}

type HttpBody = BodyInit | null;

class HttpBuilder {
    private params: {
        method: HttpMethod;
        url: string;
        headers: HttpHeaders;
        body: HttpBody;
    } = {
        method: HttpMethod.GET,
        url: '',
        headers: {},
        body: null
    }

    setMethod(method: HttpMethod) {
        this.params.method = method;
        return this;
    }

    setUrl(url: string) {
        this.params.url = url;
        return this;
    }

    setHeaders(headers: HttpHeaders) {
        this.params.headers = headers;
        return this;
    }

    setBody(body: HttpBody) {
        if (this.params.method === HttpMethod.POST) {
            this.params.body = body;
            return this;
        }
        return this
    }

    async exec() {
        const { method, url, headers, body } = this.params;
        const response = await fetch(url, {
            method,
            headers,
            body,
        });
        return response;
    }
        
}

const httpBuilder = new HttpBuilder()
httpBuilder.setMethod(HttpMethod.GET).setUrl('https://jsonplaceholder.typicode.com/posts').setHeaders({
    'Content-Type': 'application/json',
}).exec().then(console.log)