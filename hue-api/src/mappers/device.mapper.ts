import { Device } from "@common/dtos";
import { DeviceEntity } from "src/entities";
import { DeviceServiceMapper } from "./device-service.mapper";
import { ProductDataMapper } from "./product-data.mapper";

export class DeviceMapper {
  public static toDto(entity: DeviceEntity): Device {
    return {
      id: entity.id,
      metadata: entity.metadata,
      productData: ProductDataMapper.toDto(entity.product_data),
      services: entity.services.map((service) =>
        DeviceServiceMapper.toDto(service),
      ),
      raw: entity,
    };
  }
}
