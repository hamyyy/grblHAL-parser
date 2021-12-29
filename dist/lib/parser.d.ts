import { Validator } from "./validator";
import { EventHandler } from "./event_dispatcher";
import { Extractor } from "./extractor";
export declare class GrblHALParser {
    validator: Validator;
    extractor: Extractor;
    events: EventHandler;
    implemented: boolean;
    on: <T extends "gcodeState" | "grblInit" | "error" | "alarm" | "buildVersion" | "buildOptions" | "grblSetting" | "probePoint" | "helpMessage" | "gcodeSystem" | "echo" | "gcodeStartupLine" | "ok" | "message" | "status" | "newBuildOptions" | "firmwareType" | "driverType" | "driverVersion" | "driverOptions" | "boardType" | "pluginType" | "ipAddress" | "all" | "unknown">(type: T, func: (data?: T extends "gcodeState" | "grblInit" | "error" | "alarm" | "buildVersion" | "buildOptions" | "grblSetting" | "probePoint" | "helpMessage" | "gcodeSystem" | "echo" | "gcodeStartupLine" | "ok" | "message" | "status" | "newBuildOptions" | "firmwareType" | "driverType" | "driverVersion" | "driverOptions" | "boardType" | "pluginType" | "ipAddress" ? ReturnType<{
        readonly gcodeState: (state: string) => {
            type: string;
            data: {
                codes: {
                    code?: string;
                    name?: string;
                    description?: string;
                    value?: number;
                }[];
            };
            input: string;
        };
        readonly grblInit: (init: string) => {
            type: string;
            data: {
                firmwareVersion: string;
            };
            input: string;
        };
        readonly error: (error: string) => {
            type: string;
            data: {
                code?: number;
                message?: string;
            };
            input: string;
        };
        readonly alarm: (alarm: string) => {
            type: string;
            data: {
                code?: number;
                message?: string;
            };
            input: string;
        };
        readonly buildVersion: (version: string) => {
            type: string;
            data: {
                firmwareVersion?: string;
                buildDate?: string;
                buildString?: string;
            };
            input: string;
        };
        readonly buildOptions: (options: string) => {
            type: string;
            data: {
                options: {
                    code: "M" | "C" | "T" | "V" | "N" | "P" | "Z" | "H" | "A" | "*" | "$" | "#" | "I" | "E" | "W" | "L";
                    message: string;
                }[];
                extras: string[];
            };
            input: string;
        };
        readonly grblSetting: (setting: string) => {
            type: string;
            data: {
                code?: string | number;
                value?: number;
                setting?: string;
                units?: string;
                description?: string;
            };
            input: string;
        };
        readonly probePoint: (probePoint: string) => {
            type: string;
            data: {
                location?: import("./utils/extractor_utils").Coordinates;
                success?: boolean;
            };
            input: string;
        };
        readonly helpMessage: (helpMessage: string) => {
            type: string;
            data: {
                availableCommands?: string[];
            };
            input: string;
        };
        readonly gcodeSystem: (gcodeSystem: string) => {
            type: string;
            data: {
                code?: string;
                name?: string;
                description?: string;
                coordinates?: import("./utils/extractor_utils").Coordinates;
            };
            input: string;
        };
        readonly echo: (echo: string) => {
            type: string;
            data: {
                message: string;
            };
            input: string;
        };
        readonly gcodeStartupLine: (startupLine: string) => {
            type: string;
            data: {
                line: string;
                success: boolean;
            };
            input: string;
        };
        readonly ok: (success: string) => {
            type: string;
            data: {
                success: boolean;
            };
            input: string;
        };
        readonly message: (recievedMessage: string) => {
            type: string;
            data: {
                message: string;
            };
            input: string;
        };
        readonly status: (message: string) => {
            data: {
                status?: {
                    state: "Idle" | "Run" | "Hold" | "Jog" | "Alarm" | "Door" | "Check" | "Home" | "Sleep" | "Tool";
                    code?: number;
                    message?: string;
                };
                buffer?: string | import("./extractor").StatusBufferType;
                machinePosition?: string | import("./utils/extractor_utils").Coordinates;
                workPosition?: string | import("./utils/extractor_utils").Coordinates;
                workcoordinateOffset?: string | import("./utils/extractor_utils").Coordinates;
                accessories?: string | import("./extractor").AccessoriesType;
                override?: string | import("./extractor").StatusOverrideDataType;
                realtimeFeed?: string | import("./extractor").StatusFeedType;
                pins?: string | import("./extractor").StatusPinType[];
            };
            type: string;
            input: string;
        };
        readonly newBuildOptions: (newBuildOptions: string) => {
            data: {
                message: string | string[];
                autoToolChange: boolean;
                hasBlockDelete: boolean;
                hasBluetoothStreaming: boolean;
                hasEnumerators: boolean;
                hasEStop: boolean;
                hasEthernetStreaming: boolean;
                homeEnabled: boolean;
                latheMode: boolean;
                MPG: boolean;
                noProbe: boolean;
                hasOdometer: boolean;
                hasOptionalStop: boolean;
                probeConnected: boolean;
                hasPidLog: boolean;
                RT: "RT+" | "RT-";
                hasSDCardStreaming: boolean;
                hasSpindleSync: boolean;
                hasManualToolChange: boolean;
                hasWifiStreaming: boolean;
            };
            type: string;
            input: string;
        };
        readonly firmwareType: (firmwareMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly driverType: (driverMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly driverVersion: (driverMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly driverOptions: (driverMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly boardType: (boardMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly pluginType: (pluginMessage: string) => {
            data: {
                message: string;
            };
            type: string;
            input: string;
        };
        readonly ipAddress: (ipAddrMessage: string) => {
            data: {
                ip: string;
            };
            type: string;
            input: string;
        };
    }[T]> : T extends "unknown" ? {
        input: string;
        type: string;
    } : any) => void) => void;
    removeListener: (type: "gcodeState" | "grblInit" | "error" | "alarm" | "buildVersion" | "buildOptions" | "grblSetting" | "probePoint" | "helpMessage" | "gcodeSystem" | "echo" | "gcodeStartupLine" | "ok" | "message" | "status" | "newBuildOptions" | "firmwareType" | "driverType" | "driverVersion" | "driverOptions" | "boardType" | "pluginType" | "ipAddress" | "unknown", func: any) => void;
    get listeners(): import("./event_dispatcher").ListenerType[];
    constructor();
    parseData(data: string): void;
}
