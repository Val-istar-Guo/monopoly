export default class Observable {
  constructor() {
    this.observers = [];
  }


  addObserver(event, handler) {
    this.observers.push({ event, handler });
  }

  removeObserver(handler) {
    this.observers = this.observers
      .filter(observer => observer.handler !== handler);
  }

  removeObserversOfEvent(event) {
    this.observers = this.observers
      .filter(observer => observer.event !== event);
  }

  removeObserverOfEvent(event, handler) {
    this.observers = this.observers
      .filter(observer => observer.event !== event || observer.handler !== handler);
  }

  emit(event, params) {
    this.observers
      .filter(observer => observer.event=== event)
      .map(observer => observer.handler)
      .forEach(handler => handler(params));
  }

  on(event, handler) {
    this.addObserver(event, handler);
  }

  off(...arg) {
    if (typeof arg[0] === 'function') {
      this.removeObserver(...arg);
    } else if (typeof arg[0] === 'string' && arg[1] === undefined) {
      this.removeObserversOfEvent(...arg);
    } else if (typeof arg[0] === 'string' && typeof arg[1] === 'function') {
      this.removeObserverOfEvent(...arg);
    } else {
      throw new TypeError(`Expect argument: (function/eventName[, function]), but get (${arg.join(', ')})`);
    }
  }
}

