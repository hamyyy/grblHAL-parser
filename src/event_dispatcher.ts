import { MessageType, messageTypes } from "./constants";

export interface ListenerType {
  type: MessageType;
  func: (data: any) => void;
};

export class EventHandler {
  listeners: ListenerType[] = []

  emit(type: MessageType, data) {
    this.listeners.forEach(function (listener) {
      if (listener.type === type) {
        listener.func(data)
      }
    })
  }

  on(type: MessageType | 'all', func) {
    if (type == 'all') {
      this.addToAllListeners(func);
    } else {
      this.listeners.push({ type, func });
    }
  }

  removeListener(type: MessageType, func) {
    // let index = this.listeners.indexOf({ type, func })
    this.listeners.forEach((listener, index) => {
      if (listener.type == type && listener.func == func) {
        this.listeners.splice(index, 1)
      }
    })
  }

  private addToAllListeners(func) {
    for (let key of messageTypes) {
      this.on(key, func);
    }
  }
}