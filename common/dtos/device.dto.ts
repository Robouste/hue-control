import { ProductArchetype } from "@common/types";
import { HueMetadata } from "./hue-metadata.dto";
import { HueReference } from "./hue-reference.dto";
import { ProductData } from "./product-data.dto";

export interface Device {
  id: string;
  productData: ProductData;
  metadata: HueMetadata<ProductArchetype>;
  services: HueReference[];
  raw: unknown;
}
