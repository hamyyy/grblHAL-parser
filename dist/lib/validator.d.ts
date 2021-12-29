export declare const Validators: {
    readonly status: (data: string) => boolean;
    readonly ok: (data: string) => boolean;
    readonly grblInit: (data: string) => boolean;
    readonly alarm: (data: string) => boolean;
    readonly error: (data: string) => boolean;
    readonly grblSetting: (data: string) => boolean;
    readonly buildVersion: (data: string) => boolean;
    readonly buildOptions: (data: string) => boolean;
    readonly newBuildOptions: (data: string) => boolean;
    readonly firmwareType: (data: string) => boolean;
    readonly driverType: (data: string) => boolean;
    readonly driverVersion: (data: string) => boolean;
    readonly driverOptions: (data: string) => boolean;
    readonly boardType: (data: string) => boolean;
    readonly pluginType: (data: string) => boolean;
    readonly ipAddress: (data: string) => boolean;
    readonly gcodeState: (data: string) => boolean;
    readonly helpMessage: (data: string) => boolean;
    readonly gcodeSystem: (data: string) => boolean;
    readonly probePoint: (data: string) => boolean;
    readonly echo: (data: string) => boolean;
    readonly gcodeStartupLine: (data: string) => boolean;
    readonly message: (data: string) => boolean;
};
export declare class Validator {
    is<T extends keyof typeof Validators>(type: T, data: string): boolean;
}
