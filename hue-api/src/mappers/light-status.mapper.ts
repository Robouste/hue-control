import { LightStatus } from "@common/dtos";
import { LightStatusEntity } from "@entities/light-status.entity";
import { xyToRgb } from "@helpers/xy-to-rgb.function";
import { DeviceServiceMapper } from "./hue-reference.mapper";

export class LightStatusMapper {
  public static toDto(entity: LightStatusEntity): LightStatus {
    return {
      alert: entity.alert,
      color: {
        gamut: entity.color.gamut,
        gamutType: entity.color.gamut_type,
        xy: entity.color.xy,
        rgb: xyToRgb(entity.color.xy),
      },
      colorTemperature: {
        mirek: entity.color_temperature.mirek,
        mirekSchema: {
          mirekMinimum: entity.color_temperature.mirek_schema.mirek_minimum,
          mirekMaximum: entity.color_temperature.mirek_schema.mirek_maximum,
        },
        mirekValid: entity.color_temperature.mirek_valid,
      },
      colorTemperatureDelta: entity.color_temperature_delta,
      dimming: {
        brightness: entity.dimming.brightness,
        minDimLevel: entity.dimming.min_dim_level,
      },
      dimmingDelta: entity.dimming_delta,
      dynamics: {
        speed: entity.dynamics.speed,
        speedValid: entity.dynamics.speed_valid,
        status: entity.dynamics.status,
        statusValues: entity.dynamics.status_values,
      },
      effects: {
        effectValues: entity.effects.effect_values,
        status: entity.effects.status,
        statusValues: entity.effects.status_values,
      },
      gradient: entity.gradient
        ? {
            mode: entity.gradient.mode,
            modeValues: entity.gradient.mode_values,
            pixelCount: entity.gradient.pixel_count,
            points: entity.gradient.points,
            pointsCapable: entity.gradient.points_capable,
          }
        : undefined,
      id: entity.id,
      id_v1: entity.id_v1,
      identify: entity.identify,
      metadata: entity.metadata,
      mode: entity.mode,
      on: entity.on,
      owner: DeviceServiceMapper.toDto(entity.owner),
      powerup: entity.powerup,
      productData: entity.product_data,
    };
  }
}
