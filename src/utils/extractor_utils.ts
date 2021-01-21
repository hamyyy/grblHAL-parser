import { Z_ASCII } from "zlib"

export const axisTypes = ['x', 'y', 'z', 'a', 'b', 'c'] as const;
export type AxisType = typeof axisTypes[number];

export interface Coordinates {
  x?: number,
  y?: number,
  z?: number,
  a?: number,
  b?: number,
  c?: number
}


export function parseCoordinates(position: string): Coordinates {
  // example input: "23.3242,102.2234,0.4200"
  let coordinates = position.split(",")
  const obj: Coordinates = {
    x: undefined,
    y: undefined
  };

  for (let i = 0; i < coordinates.length; i++) {
    obj[axisTypes[i]] = parseFloat(coordinates[i]);
  }

  return obj;
}
