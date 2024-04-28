import { DeviceMetadataEntity } from "./device-metadata.entity";
import { DeviceServiceEntity } from "./device-service.entity";
import { ProductDataEntity } from "./product-data.entity";

export interface DeviceEntity {
  id: string;
  product_data: ProductDataEntity;
  metadata: DeviceMetadataEntity;
  services: DeviceServiceEntity[];
}
