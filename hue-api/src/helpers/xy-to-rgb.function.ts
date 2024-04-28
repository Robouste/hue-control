import { ColorValuesEntity } from "@entities/color-status.entity";

// Placeholder values for white point under Illuminant C
// const whitePoint = { X: 0.98074, Y: 1, Z: 1.18232 };

function xyToXYZ(x: number, y: number): { X: number; Y: number; Z: number } {
  // Assume a default luminance value (Y) if not provided
  const Y = 1.0;
  const X = (Y / y) * x;
  const Z = (Y / y) * (1 - x - y);

  return { X, Y, Z };
}

function XYZtosRGB(
  X: number,
  Y: number,
  Z: number,
): { r: number; g: number; b: number } {
  // sRGB transformation from XYZ
  const r = X * 3.2406 - Y * 1.5372 - Z * 0.4986;
  const g = -X * 0.9689 + Y * 1.8758 + Z * 0.0415;
  const b = X * 0.0557 - Y * 0.204 + Z * 1.057;

  // Linear to nonlinear sRGB (gamma correction)
  const gammaCorrect = (channel: number): number => {
    return channel <= 0.0031308
      ? 12.92 * channel
      : 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
  };

  return {
    r: gammaCorrect(r),
    g: gammaCorrect(g),
    b: gammaCorrect(b),
  };
}

// Convert an xy point to an RGB string usable in CSS
export function xyToRgb(xy: ColorValuesEntity): string {
  const XYZ = xyToXYZ(xy.x, xy.y);
  const sRGB = XYZtosRGB(XYZ.X, XYZ.Y, XYZ.Z);

  // Clamp the values between 0 and 1 and convert to [0-255] for CSS
  const r = Math.min(255, Math.max(0, sRGB.r * 255));
  const g = Math.min(255, Math.max(0, sRGB.g * 255));
  const b = Math.min(255, Math.max(0, sRGB.b * 255));

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
