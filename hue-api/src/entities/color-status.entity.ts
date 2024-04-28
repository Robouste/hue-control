export interface ColorStatusEntity {
  gamut: {
    blue: ColorValuesEntity;
    green: ColorValuesEntity;
    red: ColorValuesEntity;
  };
  gamut_type: string;
  xy: ColorValuesEntity;
}

export interface ColorValuesEntity {
  x: number;
  y: number;
}
