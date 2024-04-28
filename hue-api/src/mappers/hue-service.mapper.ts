import { HueService } from "@common/dtos";
import { HueServiceEntity } from "@entities/hue-service.entity";

export class HueServiceMapper {
  public static toDto(entity: HueServiceEntity): HueService {
    return {
      rId: entity.rid,
      rType: entity.rtype,
    };
  }
}
