
export const axisTypes = ['x', 'y', 'z', 'a', 'b', 'c'] as const;
export type AxisType = typeof axisTypes[number];

export type Coordinates = {[key in AxisType]: number}


export function parseCoordinates(position: string, defaultValue = null): Coordinates {
  // example input: "23.3242,102.2234,0.4200"
  let coordinates = position.split(",")
  const obj: Coordinates = {
    x: defaultValue,
    y: defaultValue,
    z: defaultValue,
    a: defaultValue,
    b: defaultValue,
    c: defaultValue,
  };

  for (let i = 0; i < coordinates.length; i++) {
    obj[axisTypes[i]] = parseFloat(coordinates[i]);
  }

  return obj;
}
