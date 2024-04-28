import { HueMetadata } from "./hue-metadata.dto";
import { HueProductData } from "./hue-product-data.dto";
import { HueService } from "./hue-service.dto";

export interface HueDevice {
  id: string;
  productData: HueProductData;
  metadata: HueMetadata;
  services: HueService[];
  raw: unknown;
}
