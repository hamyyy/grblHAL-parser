import { Checker } from "./checker";
import { EventHandler } from "./event_dispatcher";
import { StatusParser } from "./status_extractor";
import { Parser } from "./extractor";

export class GrblParser {
  checker = new Checker()
  statusParser = new StatusParser()
  parser = new Parser()
  events = new EventHandler()

  parseData(string: string) {
    let data = string.trim();

    if (this.checker.is('status', data)) {
      let statusData = this.statusParser.parse('status', data)
      this.events.emit('status', statusData)
    }
    else if (this.checker.is('ok', data)) {
      let successData = this.parser.parse('ok', data)
      this.events.emit('ok', successData)
    }
    else if (this.checker.is('grblInit', data)) {
      let initData = this.parser.parse('grblInit', data)
      this.events.emit('grblInit', initData)
    }
    else if (this.checker.is('alarm', (data))) {
      let alarmData = this.parser.parse('alarm', data)
      this.events.emit('alarm', alarmData)
    }
    else if (this.checker.is('error', (data))) {
      let errorData = this.parser.parse('error', data)
      this.events.emit('error', errorData)
    }
    else if (this.checker.is('grblSetting', (data))) {
      let grblSettingData = this.parser.parse('grblSetting', data)
      this.events.emit('grblSetting', grblSettingData)
    }
    else if (this.checker.is('feedbackMessage', (data))) {
      let feedbackMessageData = this.parser.parse('feedbackMessage', data)
      this.events.emit('feedbackMessage', feedbackMessageData)
    }
    else if (this.checker.is('buildVersion', (data))) {
      let buildVersionData = this.parser.parse('buildVersion', data)
      this.events.emit('buildVersion', buildVersionData)
    }
    else if (this.checker.is('buildOptions', (data))) {
      let buildOptionsData = this.parser.parse('buildOptions', data)
      this.events.emit('buildOptions', buildOptionsData)
    }
    else if (this.checker.is('gcodeState', (data))) {
      let gcodeStateData = this.parser.parse('gcodeState', data)
      this.events.emit('gcodeState', gcodeStateData)
    }
    else if (this.checker.is('helpMessage', (data))) {
      let helpData = this.parser.parse('helpMessage', data)
      this.events.emit('helpMessage', helpData)
    }
    else if (this.checker.is('gcodeSystem', (data))) {
      let gcodeSystem = this.parser.parse('gcodeSystem', data)
      this.events.emit('gcodeSystem', gcodeSystem)
    }
    else if (this.checker.is('probeResult', (data))) {
      let probeResultData = this.parser.parse('probeResult', data)
      this.events.emit('probeResult', probeResultData)
    }
    else if (this.checker.is('echo', (data))) {
      let echoReport = this.parser.parse('echo', data)
      this.events.emit('echo', echoReport)
    }
    else if (this.checker.is('gcodeStartupLine', (data))) {
      let startupLineData = this.parser.parse('gcodeStartupLine', data)
      this.events.emit('gcodeStartupLine', startupLineData)
    }
    else {
      let unknownData = { input: data, type: 'unknown' }
      this.events.emit('unknown', unknownData)
    }
  }
}