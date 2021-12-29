export declare const axisTypes: readonly ["x", "y", "z", "a", "b", "c"];
export declare type AxisType = typeof axisTypes[number];
export declare type Coordinates = {
    [key in AxisType]: number;
};
export declare function parseCoordinates(position: string): Coordinates;
