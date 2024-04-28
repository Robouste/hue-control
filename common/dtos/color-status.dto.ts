export interface ColorStatus {
  gamut: {
    blue: ColorValues;
    green: ColorValues;
    red: ColorValues;
  };
  gamutType: string;
  xy: ColorValues;
  rgb: string;
}

export interface ColorValues {
  x: number;
  y: number;
}
