import { DeviceMetadataEntity } from "./device-metadata.entity";
import { HueReferenceEntity } from "./hue-reference.entity";
import { ProductDataEntity } from "./product-data.entity";

export interface DeviceEntity {
  id: string;
  product_data: ProductDataEntity;
  metadata: DeviceMetadataEntity;
  services: HueReferenceEntity[];
}
