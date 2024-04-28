import { HueHumanName, HueProductArchetype } from "../types";

export interface HueProductData {
  modelId: string;
  manufacturerName: string;
  productName: string;
  productArchetype: HueProductArchetype;
  certified: boolean;
  softwareVersion: string;
  hardwarePlatformType?: string;
  humanName: HueHumanName;
  price: number;
}
