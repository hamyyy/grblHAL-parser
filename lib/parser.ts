import { Validator, Validators } from "./validator";
import { EventHandler } from "./event_dispatcher";
import { Extractor, ReportExtractors } from "./extractor";

export class GrblHALParser {
  validator = new Validator()
  extractor = new Extractor()
  events = new EventHandler()

  implemented = true;

  on = this.events.on.bind(this.events) as EventHandler['on'];
  removeListener = this.events.removeListener.bind(this.events) as EventHandler['removeListener'];
  get listeners() { return this.events.listeners };

  constructor() {

    if (Object.keys(Validators).length !== Object.keys(ReportExtractors).length) {
      this.implemented = false;
    } else {

      const a1 = Object.keys(Validators)
      const a2 = Object.keys(ReportExtractors)

      a1.sort();
      a2.sort();

      for (let i = 0; i < a1.length; i++) {
        if (a1[i] != a2[i]) {
          this.implemented = false;
          break;
        }
      }
    }

    if (!this.implemented) {
      console.warn("\x1b[33m\n\nWARNING: \x1b[35mValidators \x1b[33mand/or \x1b[31mExtractors \x1b[33mnot fully implemented yet\x1b[0m");
      const arr = [Object.keys(Validators), Object.keys(ReportExtractors)];

      let swapped = false;
      arr.sort((a, b) => a.length - b.length);
      if (arr[0].length != Object.keys(Validators).length) swapped = true;

      for (let i = arr[0].length - 1; i >= 0; i--) {
        if (arr[1].includes(arr[0][i])) {
          arr[1].splice(arr[1].indexOf(arr[0][i]), 1);
          arr[0].splice(i, 1);
        }
      }

      for (let k of arr[0]) {
        console.warn((swapped ? "\x1b[31m" : "\x1b[35m") + "%s\x1b[0m", k);
      }

      for (let k of arr[1]) {
        console.warn((swapped ? "\x1b[35m" : "\x1b[31m") + "%s\x1b[0m", k);
      }

      throw new Error("Error: Validators and Extractors do not match.");
    }

  }



  parseData(data: string) {
    let str = data.trim();

    if (str == "") return;

    const keys: (keyof typeof ReportExtractors)[] = [];
    keys.push(...Object.keys(ReportExtractors) as (keyof typeof ReportExtractors)[]);

    let emitted = false;
    for (let key of keys) {
      if (this.validator.is(key, str)) {
        let statusData = this.extractor.parse(key, str)
        this.events.emit(key, statusData)
        emitted = true;
        break;
      }
    }

    if (!emitted) {
      let unknownData = { input: str, type: 'unknown' }
      this.events.emit('unknown', unknownData)
    }
  }
}