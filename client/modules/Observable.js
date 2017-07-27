export default class {
  constructor() {
    this.listeners = [];
  }

  send(eventName, params) {
    this.listeners
      .filter(listener => listener.eventListenFor === eventName)
      .map(listener => listener.handler)
      .forEach(handler => handler(params));
  }

  addEventListener(eventName, handler) {
    this.listeners.push({
      handler,
      eventListenFor: eventName,
    });
  }

  removeListenersListenTo(eventName) {
    this.listeners = this.listeners
      .filter(listener => listener.eventListenFor !== eventName);
  }

  removeListenersHandlerIs(handler) {
    this.listeners = this.listeners
      .filter(listener => listener.handler !== handler);
  }

  removeEventLister(arg) {
    if (typeof arg === 'function') {
      const targetHandler = arg;
      removeListenersHandlerIs(targetHandler);
    } else if (typeof arg === 'string') {
      const EventName = arg;
      removeListenersListenTo(EventName);
    }
  }
}

