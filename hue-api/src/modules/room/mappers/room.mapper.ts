import { Room } from "@common/dtos";
import { HueReferenceMapper } from "@mappers/hue-reference.mapper";
import { RoomEntity } from "../models/room.entity";

export class RoomMapper {
  public static toDto(entity: RoomEntity): Room {
    return {
      id: entity.id,
      children: entity.children.map((child) => HueReferenceMapper.toDto(child)),
      services: entity.services.map((service) =>
        HueReferenceMapper.toDto(service),
      ),
      metadata: entity.metadata,
      type: entity.type,
      raw: entity,
    };
  }
}
