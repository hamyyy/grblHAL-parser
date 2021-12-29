export const ALARM_CODES: {
   [key: string]: {
      message: string,
      description: string
   }
} = {
   "1": {
      message: "Hard limit",
      description: "Hard limit has been triggered. Machine position is likely lost due to sudden halt. Re-homing is highly recommended."
   },
   "2": {
      message: "Soft limit",
      description: "Soft limit alarm. G-code motion target exceeds machine travel. Machine position retained. Alarm may be safely unlocked."
   },
   "3": {
      message: "Abort during cycle",
      description: "Reset while in motion. Machine position is likely lost due to sudden halt. Re-homing is highly recommended."
   },
   "4": {
      message: "Probe fail",
      description: "Probe fail. Probe is not in the expected initial state before starting probe cycle when G38.2 and G38.3 is not triggered and G38.4 and G38.5 is triggered."
   },
   "5": {
      message: "Probe fail",
      description: "Probe fail. Probe did not contact the workpiece within the programmed travel for G38.2 and G38.4."
   },
   "6": {
      message: "Homing fail",
      description: "Homing fail. The active homing cycle was reset."
   },
   "7": {
      message: "Homing fail",
      description: "Homing fail. Safety door was opened during homing cycle."
   },
   "8": {
      message: "Homing fail",
      description: "Homing fail. Pull off travel failed to clear limit switch. Try increasing pull-off setting or check wiring."
   },
   "9": {
      message: "Homing fail",
      description: "Homing fail. Could not find limit switch within search distances. Try increasing max travel, decreasing pull-off distance, or check wiring."
   },
   "10": {
      message: "EStop",
      description: "EStop asserted. Clear and reset"
   },
   "11": {
      message: "Homing required",
      description: "Homing required. Execute homing command ($H) to continue."
   },
   "12": {
      message: "Limit switch engaged",
      description: "Limit switch engaged. Clear before continuing."
   },
   "13": {
      message: "Probe protection triggered",
      description: "Probe protection triggered. Clear before continuing."
   },
   "14": {
      message: "Spindle at speed timeout",
      description: "Spindle at speed timeout. Clear before continuing."
   }
};