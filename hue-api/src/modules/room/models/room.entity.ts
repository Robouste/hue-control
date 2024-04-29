import { RoomArchetype } from "@common/types";
import { HueMetadataEntity } from "@entities/hue-metadata.entity";
import { HueReferenceEntity } from "@entities/hue-reference.entity";

export interface RoomEntity {
  id: string;
  id_v1: string;
  children: HueReferenceEntity[];
  services: HueReferenceEntity[];
  metadata: HueMetadataEntity<RoomArchetype>;
  type: "room";
}
