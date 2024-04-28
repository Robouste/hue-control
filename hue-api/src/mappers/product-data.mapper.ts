import { ProductData } from "@common/dtos";
import { DeviceHumanName } from "@common/types";
import { ProductDataEntity } from "@entities/product-data.entity";

export class ProductDataMapper {
  public static toDto(entity: ProductDataEntity): ProductData {
    const humanName =
      ProductDataMapper.modelIdToNameMapping[entity.model_id] || "Unknown";
    return {
      modelId: entity.model_id,
      manufacturerName: entity.manufacturer_name,
      productName: entity.product_name,
      productArchetype: entity.product_archetype,
      certified: entity.certified,
      softwareVersion: entity.software_version,
      hardwarePlatformType: entity.hardware_platform_type,
      humanName,
      price: ProductDataMapper.priceMapping[humanName],
    };
  }

  public static modelIdToNameMapping: Record<string, DeviceHumanName> = {
    LCX004: "Gradient Lightstrip",
    LCL001: "RGB Lightstrip",
    LCE002: "Small bulb",
    LCA001: "Big bulb",
    RWL022: "Dimmer",
    SML003: "Motion sensor",
    BSB002: "Bridge",
    "915005997301": "Infuse",
    "440400982842": "Hue Play",
    "4080248P9": "Hue Floor",
  };

  public static priceMapping: Record<DeviceHumanName, number> = {
    "Big bulb": 65,
    "Small bulb": 20,
    "Motion sensor": 45,
    Dimmer: 20,
    "RGB Lightstrip": 110,
    "Gradient Lightstrip": 165,
    Bridge: 50,
    Infuse: 185,
    "Hue Play": 60,
    "Hue Floor": 240,
    Unknown: 0,
  };
}
