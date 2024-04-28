import { DeviceService } from "@common/dtos";
import { DeviceServiceEntity } from "@entities/device-service.entity";

export class DeviceServiceMapper {
  public static toDto(entity: DeviceServiceEntity): DeviceService {
    return {
      rId: entity.rid,
      rType: entity.rtype,
    };
  }
}
