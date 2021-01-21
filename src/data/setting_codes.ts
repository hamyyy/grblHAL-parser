export const settingCodes = {
  "0": {
    "setting": "Step pulse time",
    "units": "microseconds",
    "datatype": "integer",
    "format": "#0",
    "description": "Sets time length per step. Minimum 3 microseconds.",
    "code": "0"
  },
  "1": {
    "setting": "Step idle delay",
    "units": "milliseconds",
    "datatype": "integer",
    "format": "##0",
    "description": "Sets a short hold delay when stopping to let dynamics settle before disabling steppers. Value 255 keeps motors enabled.",
    "code": "1"
  },
  "2": {
    "setting": "Step pulse invert",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the step signals (active low).",
    "code": "2"
  },
  "3": {
    "setting": "Step direction invert",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the direction signals (active low).",
    "code": "3"
  },
  "4": {
    "setting": "Invert step enable pin",
    "units": "boolean",
    "datatype": "",
    "format": "",
    "description": "Inverts the stepper driver enable signals  (active low). If the stepper drivers shares the same enable signal only X is used.",
    "code": "4"
  },
  "5": {
    "setting": "Invert limit pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the axis limit input signals.",
    "code": "5"
  },
  "6": {
    "setting": "Invert probe pin",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Inverts the probe input pin signal.",
    "code": "6"
  },
  "10": {
    "setting": "Status report options",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Specifies optional data included in status reports.",
    "code": "10"
  },
  "11": {
    "setting": "Junction deviation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Sets how fast Grbl travels through consecutive motions. Lower value slows it down.",
    "code": "11"
  },
  "12": {
    "setting": "Arc tolerance",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Sets the G2 and G3 arc tracing accuracy based on radial error. Beware: A very small value may effect performance.",
    "code": "12"
  },
  "13": {
    "setting": "Report in inches",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enables inch units when returning any position and rate value that is not a settings value.",
    "code": "13"
  },
  "14": {
    "setting": "Invert control pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the control signals  (active low).",
    "code": "14"
  },
  "15": {
    "setting": "Invert coolant pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the coolant and mist signals  (active low).",
    "code": "15"
  },
  "16": {
    "setting": "Invert spindle pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Inverts the spindle on and counterclockwise signals ( (active low).",
    "code": "16"
  },
  "17": {
    "setting": "Pullup disable control pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Disable the control signals pullup resistors. Potentially enables pulldown resistor if available.",
    "code": "17"
  },
  "18": {
    "setting": "Pullup disable limit pins",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Disable the limit signals pullup resistors. Potentially enables pulldown resistor if available.",
    "code": "18"
  },
  "19": {
    "setting": "Pullup disable probe pin",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Disable the probe signal pullup resistor. Potentially enables pulldown resistor if available.",
    "code": "19"
  },
  "20": {
    "setting": "Soft limits enable",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enables soft limits checks within machine travel and sets alarm when exceeded. Requires homing.",
    "code": "20"
  },
  "21": {
    "setting": "Hard limits enable",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enables hard limits. Immediately halts motion and throws an alarm when switch is triggered.",
    "code": "21"
  },
  "22": {
    "setting": "Homing cycle enable",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enables homing cycle. Requires limit switches on all axes.",
    "code": "22"
  },
  "23": {
    "setting": "Homing direction invert",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Homing searches for a switch in the positive direction. Set axis bit (00000ZYX) to search in negative direction.",
    "code": "23"
  },
  "24": {
    "setting": "Homing locate feed rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Feed rate to slowly engage limit switch to determine its location accurately.",
    "code": "24"
  },
  "25": {
    "setting": "Homing search seek rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Seek rate to quickly find the limit switch before the slower locating phase.",
    "code": "25"
  },
  "26": {
    "setting": "Homing switch debounce delay",
    "units": "milliseconds",
    "datatype": "integer",
    "format": "##0",
    "description": "Sets a short delay between phases of homing cycle to let a switch debounce.",
    "code": "26"
  },
  "27": {
    "setting": "Homing switch pull-off distance",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Retract distance after triggering switch to disengage it. Homing will fail if switch isn't cleared.",
    "code": "27"
  },
  "28": {
    "setting": "G73 Retract distance",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "G73 retract distance (for chip breaking drilling).",
    "code": "28"
  },
  "29": {
    "setting": "Pulse delay",
    "units": "microseconds",
    "datatype": "integer",
    "format": "",
    "description": "Step pulse delay.",
    "code": "29"
  },
  "30": {
    "setting": "Maximum spindle speed",
    "units": "RPM",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum spindle speed. Sets PWM to maximum duty cycle.",
    "code": "30"
  },
  "31": {
    "setting": "Minimum spindle speed",
    "units": "RPM",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Minimum spindle speed. Sets PWM to minimum duty cycle.",
    "code": "31"
  },
  "32": {
    "setting": "Mode of operation",
    "units": "",
    "datatype": "ineteger",
    "format": "",
    "description": "0 - Normal; 1 - Laser ; 2 - Lathe",
    "code": "32"
  },
  "33": {
    "setting": "Spindle PWM frequency",
    "units": "Hz",
    "datatype": "float",
    "format": "",
    "description": "Spindle PWM frequency.",
    "code": "33"
  },
  "34": {
    "setting": "Spindle PWM off value",
    "units": "",
    "datatype": "percent",
    "format": "",
    "description": "Spindle PWM off value in percent (duty cycle).",
    "code": "34"
  },
  "35": {
    "setting": "Spindle PWM min value",
    "units": "",
    "datatype": "percent",
    "format": "",
    "description": "Spindle PWM min value in percent (duty cycle).",
    "code": "35"
  },
  "36": {
    "setting": "Spindle PWM max value",
    "units": "",
    "datatype": "percent",
    "format": "",
    "description": "Spindle PWM max value in percent (duty cycle).",
    "code": "36"
  },
  "37": {
    "setting": "Steppers deenergize",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Specifies which steppers not to disable when stopped.",
    "code": "37"
  },
  "38": {
    "setting": "Spindle PPR",
    "units": "pulses",
    "datatype": "integer",
    "format": "",
    "description": "Spindle encoder pulses per revolution.",
    "code": "38"
  },
  "39": {
    "setting": "Enable legacy RT commands",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enables normal processing of ? ! and ~ characters.",
    "code": "39"
  },
  "40": {
    "setting": "Limit jog commands",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Limit jog commands to machine limits for homed axes.",
    "code": "40"
  },
  "41": {
    "setting": "Parking cycle",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Parking cycle as bitfield where setting bit 0 enables the rest.",
    "code": "41"
  },
  "42": {
    "setting": "Parking axis",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axis to use when parking.",
    "code": "42"
  },
  "43": {
    "setting": "Homing passes",
    "units": "",
    "datatype": "integer",
    "format": "",
    "description": "Homing passes, range 1 - 128",
    "code": "43"
  },
  "44": {
    "setting": "Axes homing; first pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in first pass.",
    "code": "44"
  },
  "45": {
    "setting": "Axes homing; second pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in second pass.",
    "code": "45"
  },
  "46": {
    "setting": "Axes homing; third pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in third pass.",
    "code": "46"
  },
  "47": {
    "setting": "Axes homing; fourth pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in fourth pass.",
    "code": "47"
  },
  "48": {
    "setting": "Axes homing; fifth pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in fifth pass.",
    "code": "48"
  },
  "49": {
    "setting": "Axes homing; sixth pass mask",
    "units": "",
    "datatype": "mask",
    "format": "",
    "description": "Axes to home in sixth pass.",
    "code": "49"
  },
  "50": {
    "setting": "Step jog speed",
    "units": "mm/min",
    "datatype": "float",
    "format": "",
    "description": "Step jogging speed in millimeters per minute.",
    "code": "50"
  },
  "51": {
    "setting": "Slow jog speed",
    "units": "mm/min",
    "datatype": "float",
    "format": "",
    "description": "Slow jogging speed in millimeters per minute.",
    "code": "51"
  },
  "52": {
    "setting": "Fast jog speed",
    "units": "mm/min",
    "datatype": "float",
    "format": "",
    "description": "Fast jogging speed in millimeters per minute.",
    "code": "52"
  },
  "53": {
    "setting": "Step jog distance",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Jog distance for single step jogging.",
    "code": "53"
  },
  "54": {
    "setting": "Slow jog distance",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Jog distance before automatic stop.",
    "code": "54"
  },
  "55": {
    "setting": "Fast jog distance",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Jog distance before automatic stop.",
    "code": "55"
  },
  "56": {
    "setting": "Parking Pull-out distance",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Parking Pull-out distance in mm.",
    "code": "55"
  },
  "57": {
    "setting": "Parking Pull-out rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "",
    "description": "Parking Pull-out rate in mm/min.",
    "code": "57"
  },
  "58": {
    "setting": "Parking target",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Parking target in mm.",
    "code": "58"
  },
  "59": {
    "setting": "Parking fast rate",
    "units": "mm",
    "datatype": "float",
    "format": "",
    "description": "Parking fast rate in mm.",
    "code": "59"
  },
  "60": {
    "setting": "Restore overrides",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Restore overrides to default values at program end.",
    "code": "60"
  },
  "61": {
    "setting": "Ignore door when idle",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Do not park spindle when door i sopened in idle mode.",
    "code": "61"
  },
  "62": {
    "setting": "Sleep enable",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Enable sleep mode.",
    "code": "62"
  },
  "63": {
    "setting": "Disable laser",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Disable laser during hold.",
    "code": "63"
  },
  "64": {
    "setting": "Force init alarm",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "Starts Grbl in alarm mode after a cold reset.",
    "code": "64"
  },
  "65": {
    "setting": "Check limits at init",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "If limit switches are engaged after reset this forces Grbl to start in alarm mode.",
    "code": "65"
  },
  "66": {
    "setting": "Homing init lock",
    "units": "",
    "datatype": "boolean",
    "format": "",
    "description": "If homing is enabled. homing init lock sets Grbl into an alarm state upon power up. Clear by performing a homing cycle.",
    "code": "66"
  },
  "70": {
    "setting": "Stream",
    "units": "",
    "datatype": "integer",
    "format": "",
    "description": "Input stream source: 0 - serial; 1 - bluetooth; 2 - ethernet; 3 - WiFi",
    "code": "70"
  },
  "71": {
    "setting": "WiFi SSID",
    "units": "",
    "datatype": "string",
    "format": "",
    "description": "WiFi SSID.",
    "code": "71"
  },
  "72": {
    "setting": "WiFi Password",
    "units": "",
    "datatype": "string",
    "format": "",
    "description": "WiFi Password.",
    "code": "72"
  },
  "73": {
    "setting": "WiFi Port",
    "units": "",
    "datatype": "integer",
    "format": "",
    "description": "WiFi Port Number listening for incoming connections.",
    "code": "73"
  },
  "74": {
    "setting": "Bluetooth device",
    "units": "",
    "datatype": "string",
    "format": "",
    "description": "Bluetooth device name.",
    "code": "74"
  },
  "75": {
    "setting": "Bluetooth service",
    "units": "",
    "datatype": "string",
    "format": "",
    "description": "Bluetooth service name.",
    "code": "75"
  },
  "81": {
    "setting": "Spindle P-gain",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle PID P-gain.",
    "code": "81"
  },
  "82": {
    "setting": "Spindle I-gain",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle PID I-gain.",
    "code": "82"
  },
  "83": {
    "setting": "Spindle D-gain",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle PID D-gain.",
    "code": "83"
  },
  "84": {
    "setting": "Spindle PID max error",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle PID max error.",
    "code": "84"
  },
  "85": {
    "setting": "Spindle PID max I error",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle PID max I error.",
    "code": "85"
  },
  "91": {
    "setting": "Spindle sync P-gain",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle sync PID P-gain.",
    "code": "91"
  },
  "92": {
    "setting": "Spindle sync D-gain",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle sync PID D-gain.",
    "code": "92"
  },
  "95": {
    "setting": "Spindle sync PID max I error",
    "units": "",
    "datatype": "float",
    "format": "",
    "description": "Spindle sync PID max I error.",
    "code": "95"
  },
  "100": {
    "setting": "X-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "X-axis travel resolution in steps per millimeter.",
    "code": "100"
  },
  "101": {
    "setting": "Y-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Y-axis travel resolution in steps per millimeter.",
    "code": "101"
  },
  "102": {
    "setting": "Z-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Z-axis travel resolution in steps per millimeter.",
    "code": "102"
  },
  "103": {
    "setting": "A-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "A-axis travel resolution in steps per millimeter.",
    "code": "103"
  },
  "104": {
    "setting": "B-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "B-axis travel resolution in steps per millimeter.",
    "code": "104"
  },
  "105": {
    "setting": "C-axis travel resolution",
    "units": "step/mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "C-axis travel resolution in steps per millimeter.",
    "code": "105"
  },
  "110": {
    "setting": "X-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "X-axis maximum rate. Used as G0 rapid rate.",
    "code": "110"
  },
  "111": {
    "setting": "Y-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Y-axis maximum rate. Used as G0 rapid rate.",
    "code": "111"
  },
  "112": {
    "setting": "Z-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Z-axis maximum rate. Used as G0 rapid rate.",
    "code": "112"
  },
  "113": {
    "setting": "A-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "A-axis maximum rate. Used as G0 rapid rate.",
    "code": "113"
  },
  "114": {
    "setting": "B-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "B-axis maximum rate. Used as G0 rapid rate.",
    "code": "114"
  },
  "115": {
    "setting": "C-axis maximum rate",
    "units": "mm/min",
    "datatype": "float",
    "format": "#####0.000",
    "description": "C-axis maximum rate. Used as G0 rapid rate.",
    "code": "115"
  },
  "120": {
    "setting": "X-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "X-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "120"
  },
  "121": {
    "setting": "Y-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Y-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "121"
  },
  "122": {
    "setting": "Z-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Z-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "122"
  },
  "123": {
    "setting": "A-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "A-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "123"
  },
  "124": {
    "setting": "B-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "B-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "124"
  },
  "125": {
    "setting": "C-axis acceleration",
    "units": "mm/sec^2",
    "datatype": "float",
    "format": "#####0.000",
    "description": "C-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",
    "code": "125"
  },
  "130": {
    "setting": "X-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum X-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "130"
  },
  "131": {
    "setting": "Y-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum Y-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "131"
  },
  "132": {
    "setting": "Z-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum Z-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "132"
  },
  "133": {
    "setting": "A-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum A-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "133"
  },
  "134": {
    "setting": "B-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum B-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "134"
  },
  "135": {
    "setting": "C-axis maximum travel",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Maximum B-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",
    "code": "135"
  },
  "140": {
    "setting": "X-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "140"
  },
  "141": {
    "setting": "Y-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "141"
  },
  "142": {
    "setting": "Z-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "142"
  },
  "143": {
    "setting": "A-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "143"
  },
  "144": {
    "setting": "B-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "144"
  },
  "145": {
    "setting": "C-axis motor current",
    "units": "mA",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis motor current in mA (RMS).",
    "code": "145"
  },
  "150": {
    "setting": "X-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "150"
  },
  "151": {
    "setting": "Y-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "151"
  },
  "152": {
    "setting": "Z-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "152"
  },
  "153": {
    "setting": "A-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "153"
  },
  "154": {
    "setting": "B-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "154"
  },
  "155": {
    "setting": "C-axis microsteps",
    "units": "steps",
    "datatype": "integer",
    "format": "###0",
    "description": "X-axis microsteps per fullstep.",
    "code": "155"
  },
  "160": {
    "setting": "X-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "X-axis backlash distance to compensate for.",
    "code": "160"
  },
  "161": {
    "setting": "Y-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Y-axis backlash distance to compensate for.",
    "code": "161"
  },
  "162": {
    "setting": "Z-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "Z-axis backlash distance to compensate for.",
    "code": "162"
  },
  "163": {
    "setting": "A-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "A-axis backlash distance to compensate for.",
    "code": "163"
  },
  "164": {
    "setting": "B-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "B-axis backlash distance to compensate for.",
    "code": "164"
  },
  "165": {
    "setting": "C-axis backlash compensation",
    "units": "mm",
    "datatype": "float",
    "format": "#####0.000",
    "description": "B-axis backlash distance to compensate for.",
    "code": "165"
  },
  "300": {
    "setting": "Hostname",
    "units": "",
    "datatype": "string",
    "format": "",
    "description": "Hostname, max: 64.",
    "code": "300"
  }
} as const;