import {capitalize} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = methodNameCreator(listener);
      if (!this[method]) {
        throw new Error(`
          Method ${method} is nor implemented in ${this.name} Component
        `);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = methodNameCreator(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function methodNameCreator(eventName) {
  return 'on' + capitalize(eventName);
}
