export class Router {
  routes: { [key: string]: Function };
    constructor() {
      this.routes = {};
    }
    route(path: string, callback: Function) {
      this.routes[path] = callback || function () { };
    }
    callRoute(path: string, ...args: any[]) {
      return this.routes[path](...args);
    }
}
