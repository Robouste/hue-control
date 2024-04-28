import { HueMetadataEntity } from "./hue-metadata.entity";
import { HueProductDataEntity } from "./hue-product-data.entity";
import { HueServiceEntity } from "./hue-service.entity";

export interface HueDeviceEntity {
  id: string;
  product_data: HueProductDataEntity;
  metadata: HueMetadataEntity;
  services: HueServiceEntity[];
}
