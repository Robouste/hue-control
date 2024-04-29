import { ColorStatusEntity } from "./color-status.entity";
import { ColorTemperatureEntity } from "./color-temperature.entity";
import { DeviceMetadataEntity } from "./device-metadata.entity";
import { DimmingEntity } from "./dimming.entity";
import { HueReferenceEntity } from "./hue-reference.entity";
import { LightDynamicsEntity } from "./light-dynamics.entity";
import { LightEffectsEntity } from "./light-effects.entity";
import { LightGradientEntity } from "./light-gradient.entity";

export interface LightStatusEntity {
  alert: {
    actionValues: string[];
  };
  color: ColorStatusEntity;
  color_temperature: ColorTemperatureEntity;
  color_temperature_delta: unknown;
  dimming: DimmingEntity;
  dimming_delta: unknown;
  dynamics: LightDynamicsEntity;
  effects: LightEffectsEntity;
  gradient?: LightGradientEntity;
  id: string;
  id_v1: string;
  identify: unknown;
  metadata: DeviceMetadataEntity;
  mode: string;
  on: {
    on: boolean;
  };
  owner: HueReferenceEntity;
  powerup: unknown;
  product_data: {
    function: string;
  };
}
