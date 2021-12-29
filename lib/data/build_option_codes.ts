export const BUILD_OPTION_CODES: {
    [key: string]: {
        description: string;
        state: boolean;
    };
} =
{
    "V": {
        description: "Variable spindle",
        state: true
    },
    "N": {
        description: "Line numbers",
        state: true
    },
    "M": {
        description: "Mist coolant M7",
        state: true
    },
    "C": {
        description: "CoreXY",
        state: true
    },
    "P": {
        description: "Parking motion",
        state: true
    },
    "Z": {
        description: "Homing force origin",
        state: true
    },
    "H": {
        description: "Homing single axis commands",
        state: true
    },
    "T": {
        description: "Two limit switches on axis",
        state: true
    },
    "A": {
        description: "Allow feed rate overrides in probe cycles",
        state: true
    },
    "D": {
        description: "Use spindle direction as enable pin",
        state: true
    },
    "0": {
        description: "Spindle enable off when speed is zero",
        state: true
    },
    "S": {
        description: "Software limit pin debouncing",
        state: true
    },
    "R": {
        description: "Parking override control",
        state: true
    },
    "+": {
        description: "Safety door input pin",
        state: true
    },
    "*": {
        description: "Restore all EEPROM command",
        state: false
    },
    "$": {
        description: "Restore EEPROM `$` settings command",
        state: false
    },
    "#": {
        description: "Restore EEPROM parameter data command",
        state: false
    },
    "I": {
        description: "Build info write user string command",
        state: false
    },
    "E": {
        description: "Force sync upon EEPROM write",
        state: false
    },
    "W": {
        description: "Force sync upon work coordinate offset change",
        state: false
    },
    "L": {
        description: "Homing initialization auto-lock",
        state: false
    }
} as const;

