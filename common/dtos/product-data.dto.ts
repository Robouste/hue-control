import { DeviceHumanName, ProductArchetype } from "../types";

export interface ProductData {
  modelId: string;
  manufacturerName: string;
  productName: string;
  productArchetype: ProductArchetype;
  certified: boolean;
  softwareVersion: string;
  hardwarePlatformType?: string;
  humanName: DeviceHumanName;
  price: number;
}
