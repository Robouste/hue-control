import { ColorStatus } from "./color-status.dto";
import { ColorTemperature } from "./color-temperature.dto";
import { DeviceMetadata } from "./device-metadata.dto";
import { Dimming } from "./dimming.dto";
import { HueReference } from "./hue-reference.dto";
import { LightDynamics } from "./light-dynamics.dto";
import { LightEffects } from "./light-effects.dto";
import { LightGradient } from "./light-gradient.dto";

export interface LightStatus {
  alert: {
    actionValues: string[];
  };
  color: ColorStatus;
  colorTemperature: ColorTemperature;
  colorTemperatureDelta: unknown;
  dimming: Dimming;
  dimmingDelta: unknown;
  dynamics: LightDynamics;
  effects: LightEffects;
  gradient?: LightGradient;
  id: string;
  id_v1: string;
  identify: unknown;
  metadata: DeviceMetadata;
  mode: string;
  on: {
    on: boolean;
  };
  owner: HueReference;
  powerup: unknown;
  productData: {
    function: string;
  };
}
