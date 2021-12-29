export const ERROR_CODES: {
    [key: string]: {
        message: string;
        description: string;
    }
} = {
    "1": {
        message: "Expected command letter",
        description: "G-code words consist of a letter and a value. Letter was not found."
    },
    "2": {
        message: "Bad number format",
        description: "Missing the expected G-code word value or numeric value format is not valid."
    },
    "3": {
        message: "Invalid statement",
        description: "Grbl '$' system command was not recognized or supported."
    },
    "4": {
        message: "Value < 0",
        description: "Negative value received for an expected positive value."
    },
    "5": {
        message: "Setting disabled",
        description: "Homing cycle failure. Homing is not enabled via settings."
    },
    "6": {
        message: "Value < 3 usec",
        description: "Minimum step pulse time must be greater than 3usec."
    },
    "7": {
        message: "EEPROM read fail. Using defaults",
        description: "An EEPROM read failed. Auto-restoring affected EEPROM to default values."
    },
    "8": {
        message: "Not idle",
        description: "Grbl '$' command cannot be used unless Grbl is IDLE. Ensures smooth operation during a job."
    },
    "9": {
        message: "G-code lock",
        description: "G-code commands are locked out during alarm or jog state."
    },
    "10": {
        message: "Homing not enabled",
        description: "Soft limits cannot be enabled without homing also enabled."
    },
    "11": {
        message: "Line overflow",
        description: "Max characters per line exceeded. Received command line was not executed."
    },
    "12": {
        message: "Step rate > 30kHz",
        description: "Grbl '$' setting value cause the step rate to exceed the maximum supported."
    },
    "13": {
        message: "Check Door",
        description: "Safety door detected as opened and door state initiated."
    },
    "14": {
        message: "Line length exceeded",
        description: "Build info or startup line exceeded EEPROM line length limit. Line not stored."
    },
    "15": {
        message: "Travel exceeded",
        description: "Jog target exceeds machine travel. Jog command has been ignored."
    },
    "16": {
        message: "Invalid jog command",
        description: "Jog command has no '=' or contains prohibited g-code."
    },
    "17": {
        message: "Setting disabled",
        description: "Laser mode requires PWM output."
    },
    "18": {
        message: "Reset asserted",
        description: ""
    },
    "19": {
        message: "Non positive value",
        description: ""
    },
    "20": {
        message: "Unsupported command",
        description: "Unsupported or invalid g-code command found in block."
    },
    "21": {
        message: "Modal group violation",
        description: "More than one g-code command from same modal group found in block."
    },
    "22": {
        message: "Undefined feed rate",
        description: "Feed rate has not yet been set or is undefined."
    },
    "23": {
        message: "Invalid gcode ID:23",
        description: "G-code command in block requires an integer value."
    },
    "24": {
        message: "Invalid gcode ID:24",
        description: "More than one g-code command that requires axis words found in block."
    },
    "25": {
        message: "Invalid gcode ID:25",
        description: "Repeated g-code word found in block."
    },
    "26": {
        message: "Invalid gcode ID:26",
        description: "No axis words found in block for g-code command or current modal state which requires them."
    },
    "27": {
        message: "Invalid gcode ID:27",
        description: "Line number value is invalid."
    },
    "28": {
        message: "Invalid gcode ID:28",
        description: "G-code command is missing a required value word."
    },
    "29": {
        message: "Invalid gcode ID:29",
        description: "G59.x work coordinate systems are not supported."
    },
    "30": {
        message: "Invalid gcode ID:30",
        description: "G53 only allowed with G0 and G1 motion modes."
    },
    "31": {
        message: "Invalid gcode ID:31",
        description: "Axis words found in block when no command or current modal state uses them."
    },
    "32": {
        message: "Invalid gcode ID:32",
        description: "G2 and G3 arcs require at least one in-plane axis word."
    },
    "33": {
        message: "Invalid gcode ID:33",
        description: "Motion command target is invalid."
    },
    "34": {
        message: "Invalid gcode ID:34",
        description: "Arc radius value is invalid."
    },
    "35": {
        message: "Invalid gcode ID:35",
        description: "G2 and G3 arcs require at least one in-plane offset word."
    },
    "36": {
        message: "Invalid gcode ID:36",
        description: "Unused value words found in block."
    },
    "37": {
        message: "Invalid gcode ID:37",
        description: "G43.1 dynamic tool length offset is not assigned to configured tool length axis."
    },
    "38": {
        message: "Invalid gcode ID:38",
        description: "Tool number greater than max supported value or undefined tool selected."
    },
    "39": {
        message: "Invalid gcode ID:39",
        description: "Value out of range."
    },
    "40": {
        message: "Invalid gcode ID:40",
        description: "G-code command not allowed when tool change is pending."
    },
    "41": {
        message: "Invalid gcode ID:41",
        description: "Spindle not running when motion commanded in CSS or spindle sync mode."
    },
    "42": {
        message: "Invalid gcode ID:42",
        description: "Plane must be ZX for threading."
    },
    "43": {
        message: "Invalid gcode ID:43",
        description: "Max. feed rate exceeded."
    },
    "44": {
        message: "Invalid gcode ID:44",
        description: "RPM out of range."
    },
    "45": {
        message: "Limit switch engaged",
        description: "Only homing is allowed when a limit switch is engaged."
    },
    "46": {
        message: "Homing required",
        description: "Home machine to continue."
    },
    "47": {
        message: "Invalid gcode ID:47",
        description: "ATC: current tool is not set. Set current tool with M61."
    },
    "48": {
        message: "Invalid gcode ID:48",
        description: "Value word conflict."
    },
    "50": {
        message: "E-stop",
        description: "Emergency stop active."
    },
    "60": {
        message: "SD Card",
        description: "SD Card mount failed."
    },
    "61": {
        message: "SD Card",
        description: "SD Card file open/read failed."
    },
    "62": {
        message: "SD Card",
        description: "SD Card directory listing failed."
    },
    "63": {
        message: "SD Card",
        description: "SD Card directory not found."
    },
    "64": {
        message: "SD Card",
        description: "SD Card file empty."
    },
    "70": {
        message: "Bluetooth",
        description: "Bluetooth initalisation failed."
    }
} as const;