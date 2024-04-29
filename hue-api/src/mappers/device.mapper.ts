import { Device } from "@common/dtos";
import { DeviceEntity } from "src/entities";
import { HueReferenceMapper } from "./hue-reference.mapper";
import { ProductDataMapper } from "./product-data.mapper";

export class DeviceMapper {
  public static toDto(entity: DeviceEntity): Device {
    return {
      id: entity.id,
      metadata: entity.metadata,
      productData: ProductDataMapper.toDto(entity.product_data),
      services: entity.services.map((service) =>
        HueReferenceMapper.toDto(service),
      ),
      raw: entity,
    };
  }
}
