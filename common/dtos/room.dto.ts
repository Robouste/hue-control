import { RoomArchetype } from "@common/types";
import { HueMetadata } from "./hue-metadata.dto";
import { HueReference } from "./hue-reference.dto";

export interface Room {
  id: string;
  children: HueReference[];
  services: HueReference[];
  metadata: HueMetadata<RoomArchetype>;
  type: "room";
  raw: unknown;
}
