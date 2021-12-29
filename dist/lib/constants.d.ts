export declare const settingsMap: {
    readonly N0: {
        readonly setting: "Start-up line";
        readonly units: "";
        readonly datatype: "";
        readonly format: "";
        readonly description: "First line to run by grbl when the board is powered on.";
        readonly code: "N0";
    };
    readonly N1: {
        readonly setting: "Start-up line";
        readonly units: "";
        readonly datatype: "";
        readonly format: "";
        readonly description: "Second line to run by grbl when the board is powered on.";
        readonly code: "N1";
    };
    readonly 0: {
        readonly setting: "Step pulse time";
        readonly units: "microseconds";
        readonly datatype: "integer";
        readonly format: "#0";
        readonly description: "Sets time length per step. Minimum 3 microseconds.";
        readonly code: "0";
    };
    readonly 1: {
        readonly setting: "Step idle delay";
        readonly units: "milliseconds";
        readonly datatype: "integer";
        readonly format: "##0";
        readonly description: "Sets a short hold delay when stopping to let dynamics settle before disabling steppers. Value 255 keeps motors enabled.";
        readonly code: "1";
    };
    readonly 2: {
        readonly setting: "Step pulse invert";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the step signals (active low).";
        readonly code: "2";
    };
    readonly 3: {
        readonly setting: "Step direction invert";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the direction signals (active low).";
        readonly code: "3";
    };
    readonly 4: {
        readonly setting: "Invert step enable pin";
        readonly units: "boolean";
        readonly datatype: "";
        readonly format: "";
        readonly description: "Inverts the stepper driver enable signals  (active low). If the stepper drivers shares the same enable signal only X is used.";
        readonly code: "4";
    };
    readonly 5: {
        readonly setting: "Invert limit pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the axis limit input signals.";
        readonly code: "5";
    };
    readonly 6: {
        readonly setting: "Invert probe pin";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Inverts the probe input pin signal.";
        readonly code: "6";
    };
    readonly 10: {
        readonly setting: "Status report options";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Specifies optional data included in status reports.";
        readonly code: "10";
    };
    readonly 11: {
        readonly setting: "Junction deviation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Sets how fast Grbl travels through consecutive motions. Lower value slows it down.";
        readonly code: "11";
    };
    readonly 12: {
        readonly setting: "Arc tolerance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Sets the G2 and G3 arc tracing accuracy based on radial error. Beware: A very small value may effect performance.";
        readonly code: "12";
    };
    readonly 13: {
        readonly setting: "Report in inches";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enables inch units when returning any position and rate value that is not a settings value.";
        readonly code: "13";
    };
    readonly 14: {
        readonly setting: "Invert control pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the control signals  (active low).";
        readonly code: "14";
    };
    readonly 15: {
        readonly setting: "Invert coolant pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the coolant and mist signals  (active low).";
        readonly code: "15";
    };
    readonly 16: {
        readonly setting: "Invert spindle pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Inverts the spindle on and counterclockwise signals ( (active low).";
        readonly code: "16";
    };
    readonly 17: {
        readonly setting: "Pullup disable control pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Disable the control signals pullup resistors. Potentially enables pulldown resistor if available.";
        readonly code: "17";
    };
    readonly 18: {
        readonly setting: "Pullup disable limit pins";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Disable the limit signals pullup resistors. Potentially enables pulldown resistor if available.";
        readonly code: "18";
    };
    readonly 19: {
        readonly setting: "Pullup disable probe pin";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Disable the probe signal pullup resistor. Potentially enables pulldown resistor if available.";
        readonly code: "19";
    };
    readonly 20: {
        readonly setting: "Soft limits enable";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enables soft limits checks within machine travel and sets alarm when exceeded. Requires homing.";
        readonly code: "20";
    };
    readonly 21: {
        readonly setting: "Hard limits enable";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enables hard limits. Immediately halts motion and throws an alarm when switch is triggered.";
        readonly code: "21";
    };
    readonly 22: {
        readonly setting: "Homing cycle enable";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enables homing cycle. Requires limit switches on all axes.";
        readonly code: "22";
    };
    readonly 23: {
        readonly setting: "Homing direction invert";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Homing searches for a switch in the positive direction. Set axis bit (00000ZYX) to search in negative direction.";
        readonly code: "23";
    };
    readonly 24: {
        readonly setting: "Homing locate feed rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Feed rate to slowly engage limit switch to determine its location accurately.";
        readonly code: "24";
    };
    readonly 25: {
        readonly setting: "Homing search seek rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Seek rate to quickly find the limit switch before the slower locating phase.";
        readonly code: "25";
    };
    readonly 26: {
        readonly setting: "Homing switch debounce delay";
        readonly units: "milliseconds";
        readonly datatype: "integer";
        readonly format: "##0";
        readonly description: "Sets a short delay between phases of homing cycle to let a switch debounce.";
        readonly code: "26";
    };
    readonly 27: {
        readonly setting: "Homing switch pull-off distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Retract distance after triggering switch to disengage it. Homing will fail if switch isn't cleared.";
        readonly code: "27";
    };
    readonly 28: {
        readonly setting: "G73 Retract distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "G73 retract distance (for chip breaking drilling).";
        readonly code: "28";
    };
    readonly 29: {
        readonly setting: "Pulse delay";
        readonly units: "microseconds";
        readonly datatype: "integer";
        readonly format: "";
        readonly description: "Step pulse delay.";
        readonly code: "29";
    };
    readonly 30: {
        readonly setting: "Maximum spindle speed";
        readonly units: "RPM";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum spindle speed. Sets PWM to maximum duty cycle.";
        readonly code: "30";
    };
    readonly 31: {
        readonly setting: "Minimum spindle speed";
        readonly units: "RPM";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Minimum spindle speed. Sets PWM to minimum duty cycle.";
        readonly code: "31";
    };
    readonly 32: {
        readonly setting: "Mode of operation";
        readonly units: "";
        readonly datatype: "ineteger";
        readonly format: "";
        readonly description: "0 - Normal; 1 - Laser ; 2 - Lathe";
        readonly code: "32";
    };
    readonly 33: {
        readonly setting: "Spindle PWM frequency";
        readonly units: "Hz";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PWM frequency.";
        readonly code: "33";
    };
    readonly 34: {
        readonly setting: "Spindle PWM off value";
        readonly units: "";
        readonly datatype: "percent";
        readonly format: "";
        readonly description: "Spindle PWM off value in percent (duty cycle).";
        readonly code: "34";
    };
    readonly 35: {
        readonly setting: "Spindle PWM min value";
        readonly units: "";
        readonly datatype: "percent";
        readonly format: "";
        readonly description: "Spindle PWM min value in percent (duty cycle).";
        readonly code: "35";
    };
    readonly 36: {
        readonly setting: "Spindle PWM max value";
        readonly units: "";
        readonly datatype: "percent";
        readonly format: "";
        readonly description: "Spindle PWM max value in percent (duty cycle).";
        readonly code: "36";
    };
    readonly 37: {
        readonly setting: "Steppers deenergize";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Specifies which steppers not to disable when stopped.";
        readonly code: "37";
    };
    readonly 38: {
        readonly setting: "Spindle PPR";
        readonly units: "pulses";
        readonly datatype: "integer";
        readonly format: "";
        readonly description: "Spindle encoder pulses per revolution.";
        readonly code: "38";
    };
    readonly 39: {
        readonly setting: "Enable legacy RT commands";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enables normal processing of ? ! and ~ characters.";
        readonly code: "39";
    };
    readonly 40: {
        readonly setting: "Limit jog commands";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Limit jog commands to machine limits for homed axes.";
        readonly code: "40";
    };
    readonly 41: {
        readonly setting: "Parking cycle";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Parking cycle as bitfield where setting bit 0 enables the rest.";
        readonly code: "41";
    };
    readonly 42: {
        readonly setting: "Parking axis";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axis to use when parking.";
        readonly code: "42";
    };
    readonly 43: {
        readonly setting: "Homing passes";
        readonly units: "";
        readonly datatype: "integer";
        readonly format: "";
        readonly description: "Homing passes, range 1 - 128";
        readonly code: "43";
    };
    readonly 44: {
        readonly setting: "Axes homing; first pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in first pass.";
        readonly code: "44";
    };
    readonly 45: {
        readonly setting: "Axes homing; second pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in second pass.";
        readonly code: "45";
    };
    readonly 46: {
        readonly setting: "Axes homing; third pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in third pass.";
        readonly code: "46";
    };
    readonly 47: {
        readonly setting: "Axes homing; fourth pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in fourth pass.";
        readonly code: "47";
    };
    readonly 48: {
        readonly setting: "Axes homing; fifth pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in fifth pass.";
        readonly code: "48";
    };
    readonly 49: {
        readonly setting: "Axes homing; sixth pass mask";
        readonly units: "";
        readonly datatype: "mask";
        readonly format: "";
        readonly description: "Axes to home in sixth pass.";
        readonly code: "49";
    };
    readonly 50: {
        readonly setting: "Step jog speed";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Step jogging speed in millimeters per minute.";
        readonly code: "50";
    };
    readonly 51: {
        readonly setting: "Slow jog speed";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Slow jogging speed in millimeters per minute.";
        readonly code: "51";
    };
    readonly 52: {
        readonly setting: "Fast jog speed";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Fast jogging speed in millimeters per minute.";
        readonly code: "52";
    };
    readonly 53: {
        readonly setting: "Step jog distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Jog distance for single step jogging.";
        readonly code: "53";
    };
    readonly 54: {
        readonly setting: "Slow jog distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Jog distance before automatic stop.";
        readonly code: "54";
    };
    readonly 55: {
        readonly setting: "Fast jog distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Jog distance before automatic stop.";
        readonly code: "55";
    };
    readonly 56: {
        readonly setting: "Parking Pull-out distance";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Parking Pull-out distance in mm.";
        readonly code: "55";
    };
    readonly 57: {
        readonly setting: "Parking Pull-out rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Parking Pull-out rate in mm/min.";
        readonly code: "57";
    };
    readonly 58: {
        readonly setting: "Parking target";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Parking target in mm.";
        readonly code: "58";
    };
    readonly 59: {
        readonly setting: "Parking fast rate";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Parking fast rate in mm.";
        readonly code: "59";
    };
    readonly 60: {
        readonly setting: "Restore overrides";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Restore overrides to default values at program end.";
        readonly code: "60";
    };
    readonly 61: {
        readonly setting: "Ignore door when idle";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Do not park spindle when door i sopened in idle mode.";
        readonly code: "61";
    };
    readonly 62: {
        readonly setting: "Sleep enable";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Enable sleep mode.";
        readonly code: "62";
    };
    readonly 63: {
        readonly setting: "Disable laser";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Disable laser during hold.";
        readonly code: "63";
    };
    readonly 64: {
        readonly setting: "Force init alarm";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "Starts Grbl in alarm mode after a cold reset.";
        readonly code: "64";
    };
    readonly 65: {
        readonly setting: "Check limits at init";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "If limit switches are engaged after reset this forces Grbl to start in alarm mode.";
        readonly code: "65";
    };
    readonly 66: {
        readonly setting: "Homing init lock";
        readonly units: "";
        readonly datatype: "boolean";
        readonly format: "";
        readonly description: "If homing is enabled. homing init lock sets Grbl into an alarm state upon power up. Clear by performing a homing cycle.";
        readonly code: "66";
    };
    readonly 70: {
        readonly setting: "Stream";
        readonly units: "";
        readonly datatype: "integer";
        readonly format: "";
        readonly description: "Input stream source: 0 - serial; 1 - bluetooth; 2 - ethernet; 3 - WiFi";
        readonly code: "70";
    };
    readonly 71: {
        readonly setting: "WiFi SSID";
        readonly units: "";
        readonly datatype: "string";
        readonly format: "";
        readonly description: "WiFi SSID.";
        readonly code: "71";
    };
    readonly 72: {
        readonly setting: "WiFi Password";
        readonly units: "";
        readonly datatype: "string";
        readonly format: "";
        readonly description: "WiFi Password.";
        readonly code: "72";
    };
    readonly 73: {
        readonly setting: "WiFi Port";
        readonly units: "";
        readonly datatype: "integer";
        readonly format: "";
        readonly description: "WiFi Port Number listening for incoming connections.";
        readonly code: "73";
    };
    readonly 74: {
        readonly setting: "Bluetooth device";
        readonly units: "";
        readonly datatype: "string";
        readonly format: "";
        readonly description: "Bluetooth device name.";
        readonly code: "74";
    };
    readonly 75: {
        readonly setting: "Bluetooth service";
        readonly units: "";
        readonly datatype: "string";
        readonly format: "";
        readonly description: "Bluetooth service name.";
        readonly code: "75";
    };
    readonly 81: {
        readonly setting: "Spindle P-gain";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PID P-gain.";
        readonly code: "81";
    };
    readonly 82: {
        readonly setting: "Spindle I-gain";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PID I-gain.";
        readonly code: "82";
    };
    readonly 83: {
        readonly setting: "Spindle D-gain";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PID D-gain.";
        readonly code: "83";
    };
    readonly 84: {
        readonly setting: "Spindle PID max error";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PID max error.";
        readonly code: "84";
    };
    readonly 85: {
        readonly setting: "Spindle PID max I error";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle PID max I error.";
        readonly code: "85";
    };
    readonly 91: {
        readonly setting: "Spindle sync P-gain";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle sync PID P-gain.";
        readonly code: "91";
    };
    readonly 92: {
        readonly setting: "Spindle sync D-gain";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle sync PID D-gain.";
        readonly code: "92";
    };
    readonly 95: {
        readonly setting: "Spindle sync PID max I error";
        readonly units: "";
        readonly datatype: "float";
        readonly format: "";
        readonly description: "Spindle sync PID max I error.";
        readonly code: "95";
    };
    readonly 100: {
        readonly setting: "X-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "X-axis travel resolution in steps per millimeter.";
        readonly code: "100";
    };
    readonly 101: {
        readonly setting: "Y-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Y-axis travel resolution in steps per millimeter.";
        readonly code: "101";
    };
    readonly 102: {
        readonly setting: "Z-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Z-axis travel resolution in steps per millimeter.";
        readonly code: "102";
    };
    readonly 103: {
        readonly setting: "A-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "A-axis travel resolution in steps per millimeter.";
        readonly code: "103";
    };
    readonly 104: {
        readonly setting: "B-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "B-axis travel resolution in steps per millimeter.";
        readonly code: "104";
    };
    readonly 105: {
        readonly setting: "C-axis travel resolution";
        readonly units: "step/mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "C-axis travel resolution in steps per millimeter.";
        readonly code: "105";
    };
    readonly 110: {
        readonly setting: "X-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "X-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "110";
    };
    readonly 111: {
        readonly setting: "Y-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Y-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "111";
    };
    readonly 112: {
        readonly setting: "Z-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Z-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "112";
    };
    readonly 113: {
        readonly setting: "A-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "A-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "113";
    };
    readonly 114: {
        readonly setting: "B-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "B-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "114";
    };
    readonly 115: {
        readonly setting: "C-axis maximum rate";
        readonly units: "mm/min";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "C-axis maximum rate. Used as G0 rapid rate.";
        readonly code: "115";
    };
    readonly 120: {
        readonly setting: "X-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "X-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "120";
    };
    readonly 121: {
        readonly setting: "Y-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Y-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "121";
    };
    readonly 122: {
        readonly setting: "Z-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Z-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "122";
    };
    readonly 123: {
        readonly setting: "A-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "A-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "123";
    };
    readonly 124: {
        readonly setting: "B-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "B-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "124";
    };
    readonly 125: {
        readonly setting: "C-axis acceleration";
        readonly units: "mm/sec^2";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "C-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.";
        readonly code: "125";
    };
    readonly 130: {
        readonly setting: "X-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum X-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "130";
    };
    readonly 131: {
        readonly setting: "Y-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum Y-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "131";
    };
    readonly 132: {
        readonly setting: "Z-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum Z-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "132";
    };
    readonly 133: {
        readonly setting: "A-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum A-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "133";
    };
    readonly 134: {
        readonly setting: "B-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum B-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "134";
    };
    readonly 135: {
        readonly setting: "C-axis maximum travel";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Maximum B-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.";
        readonly code: "135";
    };
    readonly 140: {
        readonly setting: "X-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "140";
    };
    readonly 141: {
        readonly setting: "Y-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "141";
    };
    readonly 142: {
        readonly setting: "Z-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "142";
    };
    readonly 143: {
        readonly setting: "A-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "143";
    };
    readonly 144: {
        readonly setting: "B-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "144";
    };
    readonly 145: {
        readonly setting: "C-axis motor current";
        readonly units: "mA";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis motor current in mA (RMS).";
        readonly code: "145";
    };
    readonly 150: {
        readonly setting: "X-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "150";
    };
    readonly 151: {
        readonly setting: "Y-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "151";
    };
    readonly 152: {
        readonly setting: "Z-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "152";
    };
    readonly 153: {
        readonly setting: "A-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "153";
    };
    readonly 154: {
        readonly setting: "B-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "154";
    };
    readonly 155: {
        readonly setting: "C-axis microsteps";
        readonly units: "steps";
        readonly datatype: "integer";
        readonly format: "###0";
        readonly description: "X-axis microsteps per fullstep.";
        readonly code: "155";
    };
    readonly 160: {
        readonly setting: "X-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "X-axis backlash distance to compensate for.";
        readonly code: "160";
    };
    readonly 161: {
        readonly setting: "Y-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Y-axis backlash distance to compensate for.";
        readonly code: "161";
    };
    readonly 162: {
        readonly setting: "Z-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "Z-axis backlash distance to compensate for.";
        readonly code: "162";
    };
    readonly 163: {
        readonly setting: "A-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "A-axis backlash distance to compensate for.";
        readonly code: "163";
    };
    readonly 164: {
        readonly setting: "B-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "B-axis backlash distance to compensate for.";
        readonly code: "164";
    };
    readonly 165: {
        readonly setting: "C-axis backlash compensation";
        readonly units: "mm";
        readonly datatype: "float";
        readonly format: "#####0.000";
        readonly description: "B-axis backlash distance to compensate for.";
        readonly code: "165";
    };
    readonly 300: {
        readonly setting: "Hostname";
        readonly units: "";
        readonly datatype: "string";
        readonly format: "";
        readonly description: "Hostname, max: 64.";
        readonly code: "300";
    };
    readonly 301: {};
    readonly 305: {};
    readonly 307: {};
    readonly 341: {};
    readonly 342: {};
    readonly 343: {};
    readonly 344: {};
    readonly 345: {};
    readonly 370: {};
    readonly 372: {};
};
export declare const gcodeMap: {
    readonly gcode: {
        readonly G0: {
            readonly code: "G0";
            readonly name: "Movement";
            readonly description: "The last movement command";
        };
        readonly G54: {
            readonly code: "G54";
            readonly name: "WCS";
            readonly description: "Default Work Coordinate System";
        };
        readonly G17: {
            readonly code: "G17";
            readonly name: "Plane";
            readonly description: "X Y (default)";
        };
        readonly G21: {
            readonly code: "G21";
            readonly name: "Units";
            readonly description: "Current units";
        };
        readonly G28: {
            readonly code: "G28";
            readonly name: "Predefined Position";
            readonly description: "Go to Predefined Position";
        };
        readonly G90: {
            readonly code: "G90";
            readonly name: "Distance Mode";
            readonly description: "Absolute distance mode";
        };
        readonly G94: {
            readonly code: "G94";
            readonly name: "Feed Rate Mode";
            readonly description: "Units per minute mode";
        };
        readonly G92: {
            readonly code: "G92";
            readonly name: "";
            readonly description: "";
        };
        readonly G55: {
            readonly code: "G55";
            readonly name: "";
            readonly description: "";
        };
        readonly G56: {
            readonly code: "G56";
            readonly name: "";
            readonly description: "";
        };
        readonly G57: {
            readonly code: "G57";
            readonly name: "";
            readonly description: "";
        };
        readonly G58: {
            readonly code: "G58";
            readonly name: "";
            readonly description: "";
        };
        readonly G59: {
            readonly code: "G59";
            readonly name: "";
            readonly description: "";
        };
        readonly "G59.1": {
            readonly code: "G59.1";
            readonly name: "";
            readonly description: "";
        };
        readonly "G59.2": {
            readonly code: "G59.2";
            readonly name: "";
            readonly description: "";
        };
        readonly "G59.3": {
            readonly code: "G59.3";
            readonly name: "";
            readonly description: "";
        };
        readonly G30: {
            readonly code: "G30";
            readonly name: "";
            readonly description: "";
        };
        readonly G5: {
            readonly code: "G5";
            readonly name: "";
            readonly description: "";
        };
        readonly G7: {
            readonly code: "G7";
            readonly name: "";
            readonly description: "";
        };
        readonly G8: {
            readonly code: "G8";
            readonly name: "";
            readonly description: "";
        };
        readonly G43: {
            readonly code: "G43";
            readonly name: "";
            readonly description: "";
        };
        readonly G49: {
            readonly code: "G49";
            readonly name: "";
            readonly description: "";
        };
        readonly G50: {
            readonly code: "G50";
            readonly name: "";
            readonly description: "";
        };
        readonly G51: {
            readonly code: "G51";
            readonly name: "";
            readonly description: "";
        };
        readonly G73: {
            readonly code: "G73";
            readonly name: "";
            readonly description: "";
        };
        readonly G81: {
            readonly code: "G81";
            readonly name: "";
            readonly description: "";
        };
        readonly G82: {
            readonly code: "G82";
            readonly name: "";
            readonly description: "";
        };
        readonly G83: {
            readonly code: "G83";
            readonly name: "";
            readonly description: "";
        };
        readonly G85: {
            readonly code: "G85";
            readonly name: "";
            readonly description: "";
        };
        readonly G86: {
            readonly code: "G86";
            readonly name: "";
            readonly description: "";
        };
        readonly G89: {
            readonly code: "G89";
            readonly name: "";
            readonly description: "";
        };
        readonly G96: {
            readonly code: "G96";
            readonly name: "";
            readonly description: "";
        };
        readonly G97: {
            readonly code: "G97";
            readonly name: "";
            readonly description: "";
        };
        readonly G98: {
            readonly code: "G98";
            readonly name: "";
            readonly description: "";
        };
        readonly G99: {
            readonly code: "G99";
            readonly name: "";
            readonly description: "";
        };
    };
    readonly mcode: {
        readonly M0: {
            readonly code: "M0";
            readonly name: "Suspended";
            readonly description: "Machine is currently suspended";
        };
        readonly M5: {
            readonly code: "M5";
            readonly name: "Spindle";
            readonly description: "Spindle stopped";
        };
        readonly M9: {
            readonly code: "M9";
            readonly name: "Coolant";
            readonly description: "Coolant stopped";
        };
        readonly M1: {
            readonly code: "M1";
            readonly name: "";
            readonly description: "";
        };
        readonly M50: {
            readonly code: "M50";
            readonly name: "";
            readonly description: "";
        };
        readonly M51: {
            readonly code: "M51";
            readonly name: "";
            readonly description: "";
        };
        readonly M53: {
            readonly code: "M53";
            readonly name: "";
            readonly description: "";
        };
        readonly M56: {
            readonly code: "M56";
            readonly name: "";
            readonly description: "";
        };
        readonly M60: {
            readonly code: "M60";
            readonly name: "";
            readonly description: "";
        };
    };
    readonly tool: {
        readonly TLO: {
            readonly code: "TLO";
            readonly name: "Tool length offset";
            readonly description: "The distance the tool is offset from the current WCS";
        };
    };
};
export declare const supportedVersions: readonly ["Grbl 1.1e", "Grbl 1.1f"];
export declare const alarmMap: {
    readonly 1: "Hard limit triggered";
    readonly 2: "G-code motion target exceeds machine travel.";
    readonly 3: "Reset while in motion. Lost steps are likely.";
    readonly 4: "Probe fail. The probe is not in the expected initial state before starting probe cycle.";
    readonly 5: "Probe fail. Probe did not contact the workpiece.";
    readonly 6: "Homing fail. Reset during active homing cycle.";
    readonly 7: "Homing fail. Safety door was opened during active homing cycle.";
    readonly 8: "Homing fail. Cycle failed to clear limit switch when pulling off.";
    readonly 9: "Homing fail. Could not find limit switch within search distance.";
};
export declare const buildOptionsMap: {
    readonly V: "Variable spindle enabled";
    readonly N: "Line numbers enabled";
    readonly M: "Mist coolant enabled";
    readonly C: "CoreXY enabled";
    readonly P: "Parking motion enabled";
    readonly Z: "Homing force origin enabled";
    readonly H: "Homing single axis enabled";
    readonly T: "Two limit switches on axis enabled";
    readonly A: "Allow feed rate overrides in probe cycles";
    readonly "*": "Restore all EEPROM disabled";
    readonly $: "Restore EEPROM $ settings disabled";
    readonly "#": "Restore EEPROM parameter data disabled";
    readonly I: "Build info write user string disabled";
    readonly E: "Force sync upon EEPROM write disabled";
    readonly W: "Force sync upon work coordinate offset change disabled";
    readonly L: "Homing init lock sets Grbl into an alarm state upon power up";
};
export declare const errorMap: {
    readonly 1: "G-code words consist of a letter and a value. Letter was not found.";
    readonly 2: "Missing the expected G-code word value or numeric value format is not valid.";
    readonly 3: "Grbl '$' system command was not recognized or supported.";
    readonly 4: "Negative value received for an expected positive value.";
    readonly 5: "Homing cycle failure. Homing is not enabled via settings.";
    readonly 6: "Minimum step pulse time must be greater than 3usec.";
    readonly 7: "An EEPROM read failed. Auto-restoring affected EEPROM to default values.";
    readonly 8: "Grbl '$' command cannot be used unless Grbl is IDLE. Ensures smooth operation during a job.";
    readonly 9: "G-code commands are locked out during alarm or jog state.";
    readonly 10: "Soft limits cannot be enabled without homing also enabled.";
    readonly 11: "Max characters per line exceeded. Received command line was not executed.";
    readonly 12: "Grbl '$' setting value cause the step rate to exceed the maximum supported.";
    readonly 13: "Safety door detected as opened and door state initiated.";
    readonly 14: "Build info or startup line exceeded EEPROM line length limit. Line not stored.";
    readonly 15: "Jog target exceeds machine travel. Jog command has been ignored.";
    readonly 16: "Jog command has no '=' or contains prohibited g-code.";
    readonly 17: "Laser mode requires PWM output.";
    readonly 20: "Unsupported or invalid g-code command found in block.";
    readonly 21: "More than one g-code command from same modal group found in block.";
    readonly 22: "Feed rate has not yet been set or is undefined.";
    readonly 23: "G-code command in block requires an integer value.";
    readonly 24: "More than one g-code command that requires axis words found in block.";
    readonly 25: "Repeated g-code word found in block.";
    readonly 26: "No axis words found in block for g-code command or current modal state which requires them.";
    readonly 27: "Line number value is invalid.";
    readonly 28: "G-code command is missing a required value word.";
    readonly 29: "G59.x work coordinate systems are not supported.";
    readonly 30: "G53 only allowed with G0 and G1 motion modes.";
    readonly 31: "Axis words found in block when no command or current modal state uses them.";
    readonly 32: "G2 and G3 arcs require at least one in-plane axis word.";
    readonly 33: "Motion command target is invalid.";
    readonly 34: "Arc radius value is invalid.";
    readonly 35: "G2 and G3 arcs require at least one in-plane offset word.";
    readonly 36: "Unused value words found in block.";
    readonly 37: "G43.1 dynamic tool length offset is not assigned to configured tool length axis.";
    readonly 38: "Tool number greater than max supported value.";
};
export declare const statusStateTypes: readonly ["Idle", "Run", "Hold", "Jog", "Alarm", "Door", "Check", "Home", "Sleep", "Tool"];
export declare type StatusStateType = typeof statusStateTypes[number];
export declare const subStateMessage: {
    readonly Door: {
        readonly 0: "Door closed. Ready to resume.";
        readonly 1: "Machine stopped. Door still ajar. Can't resume until closed.";
        readonly 2: "Door opened. Hold (or parking retract) in-progress. Reset will throw an alarm.";
        readonly 3: "Door closed and resuming. Restoring from park, if applicable. Reset will throw an alarm.";
    };
    readonly Hold: {
        readonly 0: "Hold complete. Ready to resume.";
        readonly 1: "Hold in-progress. Reset will throw an alarm.";
    };
};
export declare const statusMap: {
    readonly A: "accessories";
    readonly Bf: "buffer";
    readonly Buf: "buffer";
    readonly RX: "buffer";
    readonly FS: "realtimeFeed";
    readonly MPos: "machinePosition";
    readonly Ov: "override";
    readonly Lim: "pins";
    readonly Pn: "pins";
    readonly Pin: "pins";
    readonly WCO: "workcoordinateOffset";
    readonly WPos: "workPosition";
};
export declare const limitPinMap: {
    readonly 0: "limit-x";
    readonly 1: "limit-y";
    readonly 2: "limit-z";
    readonly 3: "limit-a";
    readonly 4: "limit-b";
    readonly 5: "limit-c";
};
export declare const controlPinMap: {
    readonly 0: "door";
    readonly 1: "hold";
    readonly 2: "soft-reset";
    readonly 3: "cycle-start";
};
export declare const grbl11PinMap: {
    readonly X: "limit-x";
    readonly Y: "limit-y";
    readonly Z: "limit-z";
    readonly A: "limit-a";
    readonly B: "limit-b";
    readonly C: "limit-c";
    readonly P: "probe";
    readonly D: "door";
    readonly H: "hold";
    readonly R: "soft-reset";
    readonly S: "cycle-start";
    readonly T: "program-stop";
    readonly E: "e-stop";
    readonly O: "probe-disconnected";
};
