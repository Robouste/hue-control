import { HueReference } from "@common/dtos";
import { HueReferenceEntity } from "@entities/hue-reference.entity";

export class HueReferenceMapper {
  public static toDto(entity: HueReferenceEntity): HueReference {
    return {
      id: entity.rid,
      type: entity.rtype,
    };
  }
}
