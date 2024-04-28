import { HueDevice } from "@common/dtos";
import { HueDeviceEntity } from "src/entities";
import { HueProductDataMapper } from "./hue-product-data.mapper";
import { HueServiceMapper } from "./hue-service.mapper";

export class HueDeviceMapper {
  public static toDto(entity: HueDeviceEntity): HueDevice {
    return {
      id: entity.id,
      metadata: entity.metadata,
      productData: HueProductDataMapper.toDto(entity.product_data),
      services: entity.services.map((service) =>
        HueServiceMapper.toDto(service),
      ),
      raw: entity,
    };
  }
}
