import { ReportExtractors } from "./extractor";

export interface ListenerType {
  type: (keyof typeof ReportExtractors | 'all' | 'unknown');
  func: (data?: any, type?: (keyof typeof ReportExtractors | 'unknown')) => void;
};

export class EventHandler {
  listeners: ListenerType[] = []

  emit(type: (keyof typeof ReportExtractors | 'unknown'), data) {
    this.listeners.forEach((listener) => {
      if (listener.type === type) {
        listener.func(data);
      }
    })
  }

  on<T extends (keyof typeof ReportExtractors | 'all' | 'unknown')>(
    type: T,
    func: (
      data?: T extends keyof typeof ReportExtractors ? ReturnType<typeof ReportExtractors[T]> :
        T extends 'unknown' ? { input: string, type: string }
        : any
    ) => void) {
    if (type == 'all') {
      this.addToAllListeners(func);
    } else {
      this.listeners.push({ type, func });
    }
  }

  removeListener(type: (keyof typeof ReportExtractors | 'unknown'), func) {
    // let index = this.listeners.indexOf({ type, func })
    this.listeners.forEach((listener, index) => {
      if (listener.type == type && listener.func == func) {
        this.listeners.splice(index, 1)
      }
    })
  }

  private addToAllListeners(func) {
    const keys: (keyof typeof ReportExtractors | 'unknown')[] = [];
    keys.push(...Object.keys(ReportExtractors) as (keyof typeof ReportExtractors)[], 'unknown');

    for (let key of keys) {
      this.on(key, func);
    }
  }
}