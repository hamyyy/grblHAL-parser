import { ReportExtractors } from "./extractor";
export interface ListenerType {
    type: (keyof typeof ReportExtractors | 'all' | 'unknown');
    func: (data?: any, type?: (keyof typeof ReportExtractors | 'unknown')) => void;
}
export declare class EventHandler {
    listeners: ListenerType[];
    emit(type: (keyof typeof ReportExtractors | 'unknown'), data: any): void;
    on<T extends (keyof typeof ReportExtractors | 'all' | 'unknown')>(type: T, func: (data?: T extends keyof typeof ReportExtractors ? ReturnType<typeof ReportExtractors[T]> : T extends 'unknown' ? {
        input: string;
        type: string;
    } : any) => void): void;
    removeListener(type: (keyof typeof ReportExtractors | 'unknown'), func: any): void;
    private addToAllListeners;
}
