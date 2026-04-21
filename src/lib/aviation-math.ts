/**
 * Aviation Mathematics Library
 */

export const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export interface WindComponents {
  crosswind: number;
  headwind: number;
  isTailwind: boolean;
  side: "Left" | "Right" | "Direct";
}

export function calculateWindComponents(
  runwayHeading: number,
  windDirection: number,
  windSpeed: number
): WindComponents {
  // Normalize angles to 0-360
  const normalizedRunway = runwayHeading % 360;
  const normalizedWind = windDirection % 360;

  // Calculate angle difference (-180 to 180)
  let diff = normalizedWind - normalizedRunway;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;

  const diffRad = toRadians(diff);

  const crosswind = Math.abs(windSpeed * Math.sin(diffRad));
  const headwindRaw = windSpeed * Math.cos(diffRad);
  const headwind = Math.abs(headwindRaw);
  const isTailwind = headwindRaw < 0;

  let side: "Left" | "Right" | "Direct" = "Direct";
  if (diff > 5 && diff < 175) side = "Right";
  else if (diff < -5 && diff > -175) side = "Left";

  return {
    crosswind: parseFloat(crosswind.toFixed(1)),
    headwind: parseFloat(headwind.toFixed(1)),
    isTailwind,
    side,
  };
}

export function calculateDensityAltitude(
  elevation: number,
  altimeter: number,
  temperature: number
): { pressureAltitude: number; densityAltitude: number; isaDev: number } {
  // Pressure Altitude = Elevation + (29.92 - altimeter) * 1000
  const pressureAltitude = elevation + (29.92 - altimeter) * 1000;

  // ISA Temperature at Elevation = 15 - (elevation / 1000 * 2)
  const isaTemp = 15 - (elevation / 1000) * 2;
  const isaDev = temperature - isaTemp;

  // Density Altitude = Pressure Altitude + (120 * isaDev)
  const densityAltitude = pressureAltitude + 120 * isaDev;

  return {
    pressureAltitude: Math.round(pressureAltitude),
    densityAltitude: Math.round(densityAltitude),
    isaDev: parseFloat(isaDev.toFixed(1)),
  };
}
