import { DeviceMetadata } from "./device-metadata.dto";
import { DeviceService } from "./device-service.dto";
import { ProductData } from "./product-data.dto";

export interface Device {
  id: string;
  productData: ProductData;
  metadata: DeviceMetadata;
  services: DeviceService[];
  raw: unknown;
}
