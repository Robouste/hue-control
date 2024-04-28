import { HueProductData } from "@common/dtos";
import { HueHumanName } from "@common/types";
import { HueProductDataEntity } from "@entities/hue-product-data.entity";

export class HueProductDataMapper {
  public static toDto(entity: HueProductDataEntity): HueProductData {
    const humanName =
      HueProductDataMapper.modelIdToNameMapping[entity.model_id] || "Unknown";
    return {
      modelId: entity.model_id,
      manufacturerName: entity.manufacturer_name,
      productName: entity.product_name,
      productArchetype: entity.product_archetype,
      certified: entity.certified,
      softwareVersion: entity.software_version,
      hardwarePlatformType: entity.hardware_platform_type,
      humanName,
      price: HueProductDataMapper.priceMapping[humanName],
    };
  }

  public static modelIdToNameMapping: Record<string, HueHumanName> = {
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

  public static priceMapping: Record<HueHumanName, number> = {
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
