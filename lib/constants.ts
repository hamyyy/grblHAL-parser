
import { ALARM_CODES as AM } from './data/alarm_codes';
import { ERROR_CODES as EM } from './data/error_codes';
import { gcodeMap as GM } from './data/gcode_map';
import { HAL_SETTING_CODES as SC } from './data/hal_setting_codes';

export const settingsMap = SC;
export const gcodeMap = GM;
export const errorMap = EM;
export const alarmMap = AM;

export const supportedVersions = ['Grbl 1.1e', 'Grbl 1.1f'] as const;


export const buildOptionsMap = {
  "V": "Variable spindle enabled",
  "N": "Line numbers enabled",
  "M": "Mist coolant enabled",
  "C": "CoreXY enabled",
  "P": "Parking motion enabled",
  "Z": "Homing force origin enabled",
  "H": "Homing single axis enabled",
  "T": "Two limit switches on axis enabled",
  "A": "Allow feed rate overrides in probe cycles",
  "*": "Restore all EEPROM disabled",
  "$": "Restore EEPROM $ settings disabled",
  "#": "Restore EEPROM parameter data disabled",
  "I": "Build info write user string disabled",
  "E": "Force sync upon EEPROM write disabled",
  "W": "Force sync upon work coordinate offset change disabled",
  "L": "Homing init lock sets Grbl into an alarm state upon power up"
} as const;


export const statusStateTypes = ["Idle", "Run", "Hold", "Jog", "Alarm", "Door", "Check", "Home", "Sleep", "Tool"] as const;
export type StatusStateType = typeof statusStateTypes[number];

export const subStateMessage = {
  "Door": {
    0: "Door closed. Ready to resume.",
    1: "Machine stopped. Door still ajar. Can't resume until closed.",
    2: "Door opened. Hold (or parking retract) in-progress. Reset will throw an alarm.",
    3: "Door closed and resuming. Restoring from park, if applicable. Reset will throw an alarm."
  },
  "Hold": {
    0: "Hold complete. Ready to resume.",
    1: "Hold in-progress. Reset will throw an alarm."
  }
} as const;

export const statusMap = {
  "A": "accessories",
  "Bf": "buffer",
  "Buf": "buffer",
  "RX": "buffer",
  "FS": "realtimeFeed",
  "MPos": "machinePosition",
  "Ov": "override",
  "Lim": "pins",
  "Pn": "pins",
  "Pin": "pins",
  "WCO": "workcoordinateOffset",
  "WPos": "workPosition"
} as const;


export const limitPinMap = {
  0: "limit-x",
  1: "limit-y",
  2: "limit-z",
  3: "limit-a",
  4: "limit-b",
  5: "limit-c"
} as const;

export const controlPinMap = {
  0: "door",
  1: "hold",
  2: "soft-reset",
  3: "cycle-start",
} as const;

export const grbl11PinMap = {
  "X": "limit-x",
  "Y": "limit-y",
  "Z": "limit-z",
  "A": "limit-a",
  "B": "limit-b",
  "C": "limit-c",
  "P": "probe",
  "D": "door",
  "H": "hold",
  "R": "soft-reset",
  "S": "cycle-start",
  "T": "program-stop",
  "E": "e-stop",
  "O": "probe-disconnected",
} as const;