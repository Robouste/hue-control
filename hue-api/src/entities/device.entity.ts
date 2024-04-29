import { ProductArchetype } from "@common/types";
import { HueMetadataEntity } from "./hue-metadata.entity";
import { HueReferenceEntity } from "./hue-reference.entity";
import { ProductDataEntity } from "./product-data.entity";

export interface DeviceEntity {
  id: string;
  product_data: ProductDataEntity;
  metadata: HueMetadataEntity<ProductArchetype>;
  services: HueReferenceEntity[];
}
