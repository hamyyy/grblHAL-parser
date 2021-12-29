import { buildOptionsMap, StatusStateType } from './constants';
import { Coordinates } from "./utils/extractor_utils";
export interface AccessoriesType {
    flood: boolean;
    mist: boolean;
    spindleDirection?: "clockwise" | "counter-clockwise";
    toolChangePending: boolean;
}
export interface StatusBufferType {
    availableBlocks: number;
    availableRXBytes: number;
}
export interface StatusFeedType {
    realtimeFeedrate: number;
    realtimeSpindle: number;
}
export interface StatusOverrideDataType {
    feeds: number;
    rapids: number;
    spindle: number;
}
export interface StatusPinType {
    pin: any;
    on: boolean;
}
export declare const ReportExtractors: {
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
                code: keyof typeof buildOptionsMap;
                message: string;
            }[];
            extras: string[];
        };
        input: string;
    };
    readonly grblSetting: (setting: string) => {
        type: string;
        data: {
            code?: number | string;
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
            location?: Coordinates;
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
            coordinates?: Coordinates;
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
                state: StatusStateType;
                code?: number;
                message?: string;
            };
            buffer?: StatusBufferType | string;
            machinePosition?: Coordinates | string;
            workPosition?: Coordinates | string;
            workcoordinateOffset?: Coordinates | string;
            accessories?: AccessoriesType | string;
            override?: StatusOverrideDataType | string;
            realtimeFeed?: StatusFeedType | string;
            pins?: StatusPinType[] | string;
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
};
export declare class Extractor {
    parse<T extends keyof typeof ReportExtractors>(type: T, data: string): ReturnType<typeof ReportExtractors[T]>;
}
