export const HAL_SETTING_CODES: {
    [key: string]: {
        setting: string;
        units?: string;
        datatype: 'integer' | 'float' | 'string' | 'bool' | 'bitfield' | 'xbitfield' | 'ip4' | 'radiobuttons';
        dataFormat?: `x(${number})` | 'axes' | string | 'csv';
        description: string;
        min?: number;
        max?: number;
    }
} =
    {
        "0": {
            setting: "Step pulse time",
            units: "microseconds",
            datatype: "float",
            dataFormat: "#0.0",
            description: "Sets time length per step. Minimum 2 microseconds.\n\nThis needs to be reduced from the default value of 10 when max. step rates exceed approximately 80 kHz.",
            min: 2,
        },
        "1": {
            setting: "Step idle delay",
            units: "milliseconds",
            datatype: "integer",
            dataFormat: "##0",
            description: "Sets a short hold delay when stopping to let dynamics settle before disabling steppers. Value 255 keeps motors enabled.",
            max: 255,
        },
        "2": {
            setting: "Step pulse invert",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Inverts the step signals (active low).",
        },
        "3": {
            setting: "Step direction invert",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Inverts the direction signals (active low).",
        },
        "4": {
            setting: "Invert step enable pin",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Inverts the stepper driver enable signals  (active low). If the stepper drivers shares the same enable signal only X is used.",
        },
        "5": {
            setting: "Invert limit pins",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Inverts the axis limit input signals.",
        },
        "6": {
            setting: "Invert probe pin",
            datatype: "bool",

            description: "Inverts the probe input pin signal.",
        },
        "10": {
            setting: "Status report options",
            datatype: "bitfield",

            description: "Position in machine coordinate,Buffer state,Line numbers,Feed & speed,Pin state,Work coordinate offset,Overrides,Probe coordinates,Buffer sync on WCO change,Parser state,Alarm substatus,Run substatus: Specifies optional data included in status reports.\nIf Run substatus is enabled it may be used for simple probe protection.\n\nNote that Parser state will be sent separately after the status report and only on changes.",
        },
        "11": {
            setting: "Junction deviation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Sets how fast Grbl travels through consecutive motions. Lower value slows it down.",
        },
        "12": {
            setting: "Arc tolerance",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Sets the G2 and G3 arc tracing accuracy based on radial error. Beware: A very small value may effect performance.",
        },
        "13": {
            setting: "Report in inches",
            datatype: "bool",

            description: "Enables inch units when returning any position and rate value that is not a settings value.",
        },
        "14": {
            setting: "Invert control pins",
            datatype: "bitfield",
            dataFormat: "Reset,Feed hold,Cycle start,Safety door,Block delete,Optional stop,EStop,Probe connected",
            description: "Inverts the control signals  (active low).\nNOTE: Block delete, Optional stop, EStop and Probe connected are optional signals, availability is driver dependent.",
        },
        "15": {
            setting: "Invert coolant pins",
            datatype: "bitfield",
            dataFormat: "Flood,Mist",
            description: "Inverts the coolant and mist signals  (active low).",
        },
        "16": {
            setting: "Invert spindle signals",
            datatype: "bitfield",
            dataFormat: "Spindle on,Spindle CCW,Invert PWM",
            description: "Inverts the spindle on, counterclockwise and PWM signals (active low).",
        },
        "17": {
            setting: "Pullup disable control pins",
            datatype: "bitfield",
            dataFormat: "Reset,Feed hold,Cycle start,Safety door,Block delete,Optional stop,EStop,Probe connected",
            description: "Disable the control signals pullup resistors. Potentially enables pulldown resistor if available.\nNOTE: Block delete, Optional stop and EStop are optional signals, availability is driver dependent.",


        },
        "18": {
            setting: "Pullup disable limit pins",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Disable the limit signals pullup resistors. Potentially enables pulldown resistor if available.",


        },
        "19": {
            setting: "Pullup disable probe pin",
            datatype: "bool",

            description: "Disable the probe signal pullup resistor. Potentially enables pulldown resistor if available.",


        },
        "20": {
            setting: "Soft limits enable",
            datatype: "bool",

            description: "Enables soft limits checks within machine travel and sets alarm when exceeded. Requires homing.",


        },
        "21": {
            setting: "Hard limits enable",
            datatype: "xbitfield",
            dataFormat: "Enable,Strict mode",
            description: "When enabled immediately halts motion and throws an alarm when a limit switch is triggered. In strict mode only homing is possible when a switch is engaged.",


        },
        "22": {
            setting: "Homing cycle",
            datatype: "xbitfield",
            dataFormat: "Enable,Enable single axis commands,Homing on startup required,Set machine origin to 0,Two switches shares one input pin,Allow manual",
            description: "Enables homing cycle. Requires limit switches on axes to be automatically homed.\n\nWhen `Enable single axis commands` is checked, single axis homing can be performed by $H<axis letter> commands.\n\nWhen `Allow manual` is checked, axes not homed automatically may be homed manually by $H or $H<axis letter> commands.",


        },
        "23": {
            setting: "Homing direction invert",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Homing searches for a switch in the positive direction. Set axis bit to search in negative direction.",


        },
        "24": {
            setting: "Homing locate feed rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.0",
            description: "Feed rate to slowly engage limit switch to determine its location accurately.",


        },
        "25": {
            setting: "Homing search seek rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.0",
            description: "Seek rate to quickly find the limit switch before the slower locating phase.",


        },
        "26": {
            setting: "Homing switch debounce delay",
            units: "milliseconds",
            datatype: "integer",
            dataFormat: "##0",
            description: "Sets a short delay between phases of homing cycle to let a switch debounce.",


        },
        "27": {
            setting: "Homing switch pull-off distance",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Retract distance after triggering switch to disengage it. Homing will fail if switch isn't cleared.",


        },
        "28": {
            setting: "G73 Retract distance",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "G73 retract distance (for chip breaking drilling).",


        },
        "29": {
            setting: "Pulse delay",
            units: "microseconds",
            datatype: "float",
            dataFormat: "#0.0",
            description: "Step pulse delay.\n\nNormally leave this at 0 as there is an implicit delay on direction changes when AMASS is active.",
            min: 0,
            max: 10,
        },
        "30": {
            setting: "Maximum spindle speed",
            units: "RPM",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum spindle speed. Sets PWM to maximum duty cycle.",


        },
        "31": {
            setting: "Minimum spindle speed",
            units: "RPM",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Minimum spindle speed. Sets PWM to minimum duty cycle.",


        },
        "32": {
            setting: "Mode of operation",

            datatype: "radiobuttons",
            dataFormat: "Normal,Laser mode,Lathe mode",
            description: "Laser mode: consecutive G1/2/3 commands will not halt when spindle speed is changed.\nLathe mode: allows use of G7, G8, G96 and G97.",


        },
        "33": {
            setting: "Spindle PWM frequency",
            units: "Hz",
            datatype: "float",
            dataFormat: "#####0",
            description: "Spindle PWM frequency.",


        },
        "34": {
            setting: "Spindle PWM off value",
            units: "percent",
            datatype: "float",
            dataFormat: "##0.0",
            description: "Spindle PWM off value in percent (duty cycle).",

            max: 100,
        },
        "35": {
            setting: "Spindle PWM min value",
            units: "percent",
            datatype: "float",
            dataFormat: "##0.0",
            description: "Spindle PWM min value in percent (duty cycle).",

            max: 100,
        },
        "36": {
            setting: "Spindle PWM max value",
            units: "percent",
            datatype: "float",
            dataFormat: "##0.0",
            description: "Spindle PWM max value in percent (duty cycle).",

            max: 100,
        },
        "37": {
            setting: "Steppers deenergize",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Specifies which steppers not to disable when stopped.",


        },
        "38": {
            setting: "Spindle PPR",
            units: "pulses",
            datatype: "integer",
            dataFormat: "###0",
            description: "Spindle encoder pulses per revolution.",


        },
        "39": {
            setting: "Enable legacy RT commands",
            datatype: "bool",

            description: "Enables \"normal\" processing of ?, ! and ~ characters when part of $-setting or comment. If disabled then they are added to the input string instead.",


        },
        "40": {
            setting: "Limit jog commands",
            datatype: "bool",

            description: "Limit jog commands to machine limits for homed axes.",


        },
        "41": {
            setting: "Parking cycle",
            datatype: "xbitfield",
            dataFormat: "Enable,Enable parking override control, Deactivate upon init",
            description: "Enables parking cycle, requires parking axis homed.",


        },
        "42": {
            setting: "Parking axis",

            datatype: "radiobuttons",
            dataFormat: "X,Y,Z",
            description: "Define which axis that performs the parking motion.",


        },
        "43": {
            setting: "Homing passes",
            datatype: "integer",
            dataFormat: "##0",
            description: "Number of homing passes. Minimum 1, maximum 128.",
            min: 1,
            max: 128,
        },
        "44": {
            setting: "Axes homing, first pass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in first pass.",


        },
        "45": {
            setting: "Axes homing, second pass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in second pass.",


        },
        "46": {
            setting: "Axes homing,third pass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in third pass.",


        },
        "47": {
            setting: "Axes homing, fourth pass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in fourth pass.",


        },
        "48": {
            setting: "Axes homing, fifthpass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in fifth pass.",


        },
        "49": {
            setting: "Axes homing, sixth pass",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Axes to home in sixth pass.",


        },
        "50": {
            setting: "Step jog speed",
            units: "mm/min",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Step jogging speed in millimeters per minute.",


        },
        "51": {
            setting: "Slow jog speed",
            units: "mm/min",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Slow jogging speed in millimeters per minute.",


        },
        "52": {
            setting: "Fast jog speed",
            units: "mm/min",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Fast jogging speed in millimeters per minute.",


        },
        "53": {
            setting: "Step jog distance",
            units: "mm",
            datatype: "float",
            dataFormat: "#0.000",
            description: "Jog distance for single step jogging.",


        },
        "54": {
            setting: "Slow jog distance",
            units: "mm",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Jog distance before automatic stop.",


        },
        "55": {
            setting: "Fast jog distance",
            units: "mm",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Jog distance before automatic stop.",


        },
        "56": {
            setting: "Parking pull-out distance",
            units: "mm",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Spindle pull-out and plunge distance in mm.Incremental distance.",


        },
        "57": {
            setting: "Parking pull-out rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Spindle pull-out/plunge slow feed rate in mm/min.",


        },
        "58": {
            setting: "Parking target",
            units: "mm",
            datatype: "float",
            dataFormat: "-###0.0",
            description: "Parking axis target. In mm, as machine coordinate [-max_travel, 0].",
            min: -100000,
            max: 0,
        },
        "59": {
            setting: "Parking fast rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "###0.0",
            description: "Parking fast rate to target after pull-out in mm/min.",


        },
        "60": {
            setting: "Restore overrides",
            datatype: "bool",

            description: "Restore overrides to default values at program end.",


        },
        "61": {
            setting: "Ignore door when idle",
            datatype: "bool",

            description: "Enable this if it is desirable to open the safety door when in IDLE mode (eg. for jogging).",


        },
        "62": {
            setting: "Sleep enable",
            datatype: "bool",

            description: "Enable sleep mode.",


        },
        "63": {
            setting: "Feed hold actions",
            datatype: "bitfield",
            dataFormat: "Disable laser during hold,Restore spindle and coolant state on resume",
            description: "Actions taken during feed hold and on resume from feed hold.",


        },
        "64": {
            setting: "Force init alarm",
            datatype: "bool",

            description: "Starts Grbl in alarm mode after a cold reset.",


        },
        "65": {
            setting: "Probing feed override",
            datatype: "bool",

            description: "Allow feed override during probing.",


        },
        "70": {
            setting: "Network Services",
            datatype: "bitfield",
            dataFormat: "Telnet,Websocket,HTTP,DNS,MDNS,SSDP",
            description: "Network services to enable. Consult driver documentation for availability.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "71": {
            setting: "Bluetooth device",

            datatype: "string",
            dataFormat: "x(32)",
            description: "Bluetooth device name.",


        },
        "72": {
            setting: "Bluetooth service",

            datatype: "string",
            dataFormat: "x(32)",
            description: "Bluetooth service name.",


        },
        "73": {
            setting: "WiFi Mode",

            datatype: "radiobuttons",
            dataFormat: "Off,Station,Access Point,Access Point/Station",
            description: "WiFi Mode.",


        },
        "74": {
            setting: "WiFi Station (STA) SSID",

            datatype: "string",
            dataFormat: "x(64)",
            description: "WiFi Station (STA) SSID.",


        },
        "75": {
            setting: "WiFi Station (STA) Password",

            datatype: "string",
            dataFormat: "x(32)",
            description: "WiFi Station (STA) Password.",


        },
        "76": {
            setting: "WiFi Access Point (AP) SSID",

            datatype: "string",
            dataFormat: "x(64)",
            description: "WiFi Access Point (AP) SSID.",


        },
        "77": {
            setting: "WiFi Access Point (AP) Password",

            datatype: "string",
            dataFormat: "x(32)",
            description: "WiFi Access Point (AP) Password.",


        },
        "80": {
            setting: "Spindle P-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "81": {
            setting: "Spindle I-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "82": {
            setting: "Spindle D-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "84": {
            setting: "Spindle PID max error",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "85": {
            setting: "Spindle PID max I error",
            datatype: "float",
            dataFormat: "###0.000",
            description: "Spindle PID max integrator error.",


        },
        "90": {
            setting: "Spindle sync P-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "91": {
            setting: "Spindle sync I-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "92": {
            setting: "Spindle sync D-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "95": {
            setting: "Spindle sync PID max I error",

            datatype: "float",
            dataFormat: "###0.000",
            description: "Spindle sync PID max integrator error.",


        },
        "100": {
            setting: "X-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "X-axis travel resolution in steps per millimeter.",


        },
        "101": {
            setting: "Y-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Y-axis travel resolution in steps per millimeter.",


        },
        "102": {
            setting: "Z-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Z-axis travel resolution in steps per millimeter.",


        },
        "103": {
            setting: "A-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "A-axis travel resolution in steps per millimeter.",


        },
        "104": {
            setting: "B-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "B-axis travel resolution in steps per millimeter.",


        },
        "105": {
            setting: "C-axis travel resolution",
            units: "step/mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "C-axis travel resolution in steps per millimeter.",


        },
        "110": {
            setting: "X-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "X-axis maximum rate. Used as G0 rapid rate.",


        },
        "111": {
            setting: "Y-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Y-axis maximum rate. Used as G0 rapid rate.",


        },
        "112": {
            setting: "Z-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Z-axis maximum rate. Used as G0 rapid rate.",


        },
        "113": {
            setting: "A-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "A-axis maximum rate. Used as G0 rapid rate.",


        },
        "114": {
            setting: "B-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "B-axis maximum rate. Used as G0 rapid rate.",


        },
        "115": {
            setting: "C-axis maximum rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "C-axis maximum rate. Used as G0 rapid rate.",


        },
        "120": {
            setting: "X-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "X-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "121": {
            setting: "Y-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Y-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "122": {
            setting: "Z-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Z-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "123": {
            setting: "A-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "A-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "124": {
            setting: "B-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "B-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "125": {
            setting: "C-axis acceleration",
            units: "mm/sec^2",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "C-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.",


        },
        "130": {
            setting: "X-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum X-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "131": {
            setting: "Y-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum Y-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "132": {
            setting: "Z-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum Z-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "133": {
            setting: "A-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum A-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "134": {
            setting: "B-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum B-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "135": {
            setting: "C-axis maximum travel",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Maximum C-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.",


        },
        "140": {
            setting: "X-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "X-axis motor current in mA (RMS).",


        },
        "141": {
            setting: "Y-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "Y-axis motor current in mA (RMS).",


        },
        "142": {
            setting: "Z-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "Z-axis motor current in mA (RMS).",


        },
        "143": {
            setting: "A-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "A-axis motor current in mA (RMS).",


        },
        "144": {
            setting: "B-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "B-axis motor current in mA (RMS).",


        },
        "145": {
            setting: "C-axis motor current",
            units: "mA",
            datatype: "integer",
            dataFormat: "###0",
            description: "C-axis motor current in mA (RMS).",


        },
        "150": {
            setting: "X-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "X-axis microsteps per fullstep.",


        },
        "151": {
            setting: "Y-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "Y-axis microsteps per fullstep.",


        },
        "152": {
            setting: "Z-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "Z-axis microsteps per fullstep.",


        },
        "153": {
            setting: "A-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "A-axis microsteps per fullstep.",


        },
        "154": {
            setting: "B-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "B-axis microsteps per fullstep.",


        },
        "155": {
            setting: "C-axis microsteps",
            units: "steps",
            datatype: "integer",
            dataFormat: "###0",
            description: "C-axis microsteps per fullstep.",


        },
        "160": {
            setting: "X-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "X-axis backlash distance to compensate for.",


        },
        "161": {
            setting: "Y-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Y-axis backlash distance to compensate for.",


        },
        "162": {
            setting: "Z-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "Z-axis backlash distance to compensate for.",


        },
        "163": {
            setting: "A-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "A-axis backlash distance to compensate for.",


        },
        "164": {
            setting: "B-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "B-axis backlash distance to compensate for.",


        },
        "165": {
            setting: "C-axis backlash compensation",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.000",
            description: "C-axis backlash distance to compensate for.",


        },
        "256": {
            setting: "Trinamic driver",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Enable SPI controlled Trinamic driver for axis.",


        },
        "257": {
            setting: "Sensorless homing",
            datatype: "bitfield",
            dataFormat: "axes",
            description: "Enable sensorless homing for axis. Requires SPI controlled Trinamic driver.",


        },
        "300": {
            setting: "Hostname",

            datatype: "string",
            dataFormat: "x(64)",
            description: "Network hostname.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "301": {
            setting: "IP Mode",

            datatype: "radiobuttons",
            dataFormat: "Static,DHCP,AutoIP",
            description: "IP Mode.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "302": {
            setting: "IP Address",

            datatype: "ip4",

            description: "Static IP address.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "303": {
            setting: "Gateway",

            datatype: "ip4",

            description: "Static gateway address.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "304": {
            setting: "Netmask",

            datatype: "ip4",

            description: "Static netmask.\n\nNOTE: A hard reset of the controller is required after changing network settings.",


        },
        "305": {
            setting: "Telnet Port",

            datatype: "integer",
            dataFormat: "####0",
            description: "(Raw) Telnet port number listening for incoming connections.\n\nNOTE: A hard reset of the controller is required after changing network settings.",
            min: 1,
            max: 65535,
        },
        "306": {
            setting: "HTTP Port",

            datatype: "integer",
            dataFormat: "####0",
            description: "HTTP port number listening for incoming connections.\n\nNOTE: A hard reset of the controller is required after changing network settings.",
            min: 1,
            max: 65535,
        },
        "307": {
            setting: "Websocket Port",

            datatype: "integer",
            dataFormat: "####0",
            description: "Websocket port number listening for incoming connections.\n\nNOTE: A hard reset of the controller is required after changing network settings.\nNOTE: WebUI requires this to be HTTP port number + 1.",
            min: 1,
            max: 65535,
        },
        "330": {
            setting: "Admin Password",

            datatype: "string",
            dataFormat: "x(32)",
            description: "Administrator password.",


        },
        "331": {
            setting: "User Password",

            datatype: "string",
            dataFormat: "x(32)",
            description: "User password.",


        },
        "340": {
            setting: "Spindle at speed tolerance",
            units: "percent",
            datatype: "float",
            dataFormat: "##0.0",
            description: "\"Spindle at speed\" tolerance in percent of programmed RPM. Set to 0 to disable \"Spindle at speed\" check.",
            min: 1,
            max: 100,
        },
        "341": {
            setting: "Tool change mode",

            datatype: "radiobuttons",
            dataFormat: "Normal,Manual touch off,Manual touch off @ G59.3,Automatic touch off @ G59.3,Ignore M6",
            description: "Normal: allows jogging for manual touch off. Set new position manually.\n\nManual touch off: retracts tool axis to home position for tool change, use jogging or $TPW for touch off.\n\nManual touch off @ G59.3: retracts tool axis to home position then to G59.3 position for tool change, use jogging or $TPW for touch off.\n\nAutomatic touch off @ G59.3: retracts tool axis to home position for tool change, then to G59.3 position for automatic touch off.\n\nAll modes except \"Normal\" and \"Ignore M6\" returns the tool (controlled point) to original position after touch off.",


        },
        "342": {
            setting: "Tool change probing distance",
            units: "mm",
            datatype: "float",
            dataFormat: "#####0.0",
            description: "Maximum probing distance for automatic or $TPW touch off.",


        },
        "343": {
            setting: "Tool change locate feed rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.0",
            description: "Feed rate to slowly engage tool change sensor to determine the tool offset accurately.",


        },
        "344": {
            setting: "Tool change search seek rate",
            units: "mm/min",
            datatype: "float",
            dataFormat: "#####0.0",
            description: "Seek rate to quickly find the tool change sensor before the slower locating phase.",


        },
        "350": {
            setting: "Plasma mode",

            datatype: "radiobuttons",
            dataFormat: "Off,Up/down,Voltage",
            description: "Universal: Toggle between Feed rate, Rapid rate and Spindle RPM override modes with single click. Double click to reset to default.\nOther modes: single or double click to reset to default value.",


        },
        "351": {
            setting: "Plasma THC delay",
            units: "s",
            datatype: "float",
            dataFormat: "#0.0",
            description: "Delay from cut start until THC activates.",


        },
        "352": {
            setting: "Plasma THC threshold",
            units: "V",
            datatype: "float",
            dataFormat: "#0.00",
            description: "Variation from target voltage for THC to correct height.",


        },
        "353": {
            setting: "Plasma THC P-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "354": {
            setting: "Plasma THC I-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "355": {
            setting: "Plasma THC D-gain",

            datatype: "float",
            dataFormat: "###0.000",
            description: "",


        },
        "356": {
            setting: "Plasma THC VAD threshold",
            units: "%",
            datatype: "integer",
            dataFormat: "#0",
            description: "Percentage of Cut Feed Rate velocity needs to fall below to lock THC.",


        },
        "357": {
            setting: "Plasma THC Void override",
            units: "%",
            datatype: "integer",
            dataFormat: "#0",
            description: "Higher values need greater voltage change to lock THC.",


        },
        "358": {
            setting: "Plasma Arc fail timeout",
            units: "s",
            datatype: "float",
            dataFormat: "#0.0",
            description: "The amount of time to wait from torch on until a failure if arc is not detected.",


        },
        "359": {
            setting: "Plasma Arc retry delay",
            units: "s",
            datatype: "float",
            dataFormat: "#0.0",
            description: "The time between an arc failure and another arc start attempt.",


        },
        "360": {
            setting: "Plasma Arc max retries",

            datatype: "integer",
            dataFormat: "#0",
            description: "The number of attempts at starting an arc.",


        },
        "361": {
            setting: "Plasma Arc voltage scale",

            datatype: "float",
            dataFormat: "###0.000",
            description: "The value required to scale the arc voltage input to display the correct arc voltage.",


        },
        "362": {
            setting: "Plasma Arc voltage offset",

            datatype: "float",
            dataFormat: "###0.000",
            description: "The value required to display zero volts when there is zero arc voltage input.\nFor initial setup multiply the arc voltage out value by -1 and enter that for Voltage Offset.",


        },
        "363": {
            setting: "Plasma Arc height per volt",
            units: "mm",
            datatype: "float",
            dataFormat: "###0.000",
            description: "The distance the torch would need to move to change the arc voltage by one volt.\nUsed for manual height change only.",


        },
        "364": {
            setting: "Plasma Arc ok high volts",
            units: "V",
            datatype: "float",
            dataFormat: "###0.000",
            description: "High voltage threshold for Arc OK.",


        },
        "365": {
            setting: "Plasma Arc ok low volts",
            units: "V",
            datatype: "float",
            dataFormat: "###0.000",
            description: "Low voltage threshold for Arc OK.",


        },
        "370": {
            setting: "Invert IOPort inputs",
            datatype: "bitfield",
            dataFormat: "Port 0,Port 1,Port 2,Port 3,Port 4,Port 5,Port 6,Port 7",
            description: "Invert IOPort inputs.",


        },
        "371": {
            setting: "IOPort inputs pullup disable.",
            datatype: "bitfield",
            dataFormat: "Port 0,Port 1,Port 2,Port 3,Port 4,Port 5,Port 6,Port 7",
            description: "Disable IOPort input pullups.",


        },
        "372": {
            setting: "Invert IOPort outputs",
            datatype: "bitfield",
            dataFormat: "Port 0,Port 1,Port 2,Port 3,Port 4,Port 5,Port 6,Port 7",
            description: "Invert IOPort output.",


        },
        "373": {
            setting: "IOPort outputs OD",
            datatype: "bitfield",
            dataFormat: "Port 0,Port 1,Port 2,Port 3,Port 4,Port 5,Port 6,Port 7",
            description: "Set IOPort outputs as open drain (OD).",


        },
        "400": {
            setting: "Encoder mode",

            datatype: "radiobuttons",
            dataFormat: "Universal,Feed rate override,Rapid rate override,Spindle RPM override",
            description: "Universal: Toggle between Feed rate, Rapid rate and Spindle RPM override modes with single click. Double click to reset to default.\nOther modes: single or double click to reset to default value.",


        },
        "401": {
            setting: "Encoder CPR",

            datatype: "integer",
            dataFormat: "###0",
            description: "Encoder Count Per Revolution.",
            min: 1,

        },
        "402": {
            setting: "Encoder CPD",

            datatype: "integer",
            dataFormat: "#0",
            description: "Encoder Count Per Detent.",
            min: 1,

        },
        "403": {
            setting: "Encoder double click sensitivity",
            units: "ms",
            datatype: "integer",
            dataFormat: "##0",
            description: "Maximum time for detecting a double click.",
            min: 100,
            max: 900,
        }
    } as const;