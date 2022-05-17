export default class FetchRequest {
  method;

  body;

  headers;

  url;

  constructor({
    method = 'GET', body, url = '', headers,
  } = {}) {
    this.method = method;
    this.body = body;
    this.headers = headers;
    this.url = url;
  }

  async call() {
    try {
      const options = {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: this.headers,
      };

      const response = await fetch(this.url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
