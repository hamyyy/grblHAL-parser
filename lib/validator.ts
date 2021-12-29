export const Validators = {
  status(data: string) {
    // <Hold:0|MPos:0.000,0.000,0.000,0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFM|Pn:POXYZABCDRHSEBT|A:SMFT>
    return /^<.*>$/.test(data)
  },

  ok(data: string) {
    // ok
    return /^ok$/.test(data)
  },

  grblInit(data: string) {
    //GrblHAL 1.1f ['$' or '$HELP' for help]
    //Grbl 1.1f ['$' for help]
    //Grbl 1.1f [giberish]
    return /^Grbl(HAL)?\s?v?(\d+\.\d+.)\s\[.+\]$/.test(data)
  },

  alarm(data: string) {
    return /^ALARM:.+$/.test(data)
  },

  error(data: string) {
    return /^error:.+$/.test(data)
  },

  grblSetting(data: string) {
    // $xxx=###
    return /^\$\d+\=.+$/.test(data) || /^\$N\d+\=(.*)?$/.test(data)
  },

  buildVersion(data: string) {
    return /^\[(VER:)?(\d\.\d\w).+\:.*\]$/.test(data)
  },

  buildOptions(data: string) {
    return /^\[OPT\:.*\]$/.test(data)
  },

  newBuildOptions(data: string) {
    return /^\[NEWOPT\:.*\]$/.test(data)
  },

  firmwareType(data: string) {
    return /^\[FIRMWARE:.*\]$/.test(data);
  },

  driverType(data: string) {
    return /^\[DRIVER:.*\]$/.test(data);
  },

  driverVersion(data: string) {
    return /^\[DRIVER VERSION:.*\]$/.test(data);
  },

  driverOptions(data: string) {
    return /^\[DRIVER OPTIONS:.*\]$/.test(data);
  },

  boardType(data: string) {
    return /^\[BOARD:.*\]$/.test(data);
  },

  pluginType(data: string) {
    return /^\[PLUGIN:.*\]$/.test(data);
  },

  ipAddress(data: string) {
    return /^\[IP:.*\]$/.test(data);
  },

  gcodeState(data: string) {
    return /^\[.+(G\d).+(M\d).+\]$/.test(data)
  },

  helpMessage(data: string) {
    return /^\[HLP\:.*\]$/.test(data)
  },

  gcodeSystem(data: string) {
    return /^\[(G\d+(\.\d+)?|TLO)\:.*\]$/.test(data)
  },

  probePoint(data: string) {
    return /^\[PRB\:.*\]$/.test(data)
  },

  echo(data: string) {
    return /^\[echo\:.*\]$/.test(data)
  },

  gcodeStartupLine(data: string) {
    return /^\>?.+\:?ok$/.test(data)
  },

  message(data: string) { // keep this as last in array
    return /^\[MSG:.*\]$/.test(data);
    if (/^\[((?!G|VER:|TLO|OPT|HLP|echo|PRB).+)\]$/.test(data)) {
      return !/^\[(VER:)?(\d\.\d\w).+\:.*\]$/.test(data)
    }
    return false
  }
} as const;


export class Validator {

  is<T extends keyof typeof Validators>(type: T, data: string): boolean {  //| { [key in T]?: boolean } {

    // if (type == 'all') {
    //   const results: { [key in T]?: boolean } = {};
    //   for (let key in Validators) {
    //     results[key](Validators[key](data));
    //   }
    //   return results;
    // }

    return Validators[type](data) as any;
  }
}
