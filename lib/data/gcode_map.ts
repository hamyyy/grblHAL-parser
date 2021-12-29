// G5 G7 G8 G43 G49 G50 G51 G73 G81 G82 G83 G85 G86 G89 G96 G97 G98 G99 M1 M50 M51 M53 M56 M60

export const gcodeMap = {
  gcode: {
    G0: {

      name: "Movement",
      description: "The last movement command"
    },
    G54: {

      name: "WCS",
      description: "Default Work Coordinate System"
    },
    G17: {

      name: "Plane",
      description: "X Y (default)"
    },
    G21: {

      name: "Units",
      description: "Current units"
    },
    G28: {

      name: "Predefined Position",
      description: "Go to Predefined Position"
    },
    G90: {

      name: "Distance Mode",
      description: "Absolute distance mode"
    },
    G94: {

      name: "Feed Rate Mode",
      description: "Units per minute mode"
    },
    G92: {

      name: "",
      description: ""
    },
    G55: {

      name: "",
      description: ""
    },
    G56: {

      name: "",
      description: ""
    },
    G57: {

      name: "",
      description: ""
    },
    G58: {

      name: "",
      description: ""
    },
    G59: {

      name: "",
      description: ""
    },
    "G59.1": {

      name: "",
      description: ""
    },
    "G59.2": {

      name: "",
      description: ""
    },
    "G59.3": {

      name: "",
      description: ""
    },

    G30: {

      name: "",
      description: ""
    },
    G5: {

      name: "",
      description: ""
    },
    G7: {

      name: "",
      description: ""
    },
    G8: {

      name: "",
      description: ""
    },
    G43: {

      name: "",
      description: ""
    },
    G49: {

      name: "",
      description: ""
    },
    G50: {

      name: "",
      description: ""
    },
    G51: {

      name: "",
      description: ""
    },
    G73: {

      name: "",
      description: ""
    },
    G81: {

      name: "",
      description: ""
    },
    G82: {

      name: "",
      description: ""
    },
    G83: {

      name: "",
      description: ""
    },
    G85: {

      name: "",
      description: ""
    },
    G86: {

      name: "",
      description: ""
    },
    G89: {

      name: "",
      description: ""
    },
    G96: {

      name: "",
      description: ""
    },
    G97: {

      name: "",
      description: ""
    },
    G98: {

      name: "",
      description: ""
    },
    G99: {

      name: "",
      description: ""
    }
  },
  mcode: {
    M0: {

      name: "Suspended",
      description: "Machine is currently suspended"
    },
    M5: {

      name: "Spindle",
      description: "Spindle stopped"
    },
    M9: {

      name: "Coolant",
      description: "Coolant stopped"
    },
    M1: {

      name: "",
      description: ""
    },
    M50: {

      name: "",
      description: ""
    },
    M51: {

      name: "",
      description: ""
    },
    M53: {

      name: "",
      description: ""
    },
    M56: {

      name: "",
      description: ""
    },
    M60: {

      name: "",
      description: ""
    }
  },
  tool: {
    TLO: {

      name: "Tool length offset",
      description: "The distance the tool is offset from the current WCS"
    }
  }
} as const;