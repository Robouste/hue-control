import { DeviceHumanName } from "@common/types";
import { AppConstants } from "@core/app.constants";

export const iconMapping: Record<DeviceHumanName, string> = {
  "Gradient Lightstrip": AppConstants.icons.lightstrip,
  "RGB Lightstrip": AppConstants.icons.lightstrip,
  "Small bulb": AppConstants.icons.bulb,
  "Big bulb": AppConstants.icons.bulb,
  Dimmer: AppConstants.icons.dimmer,
  "Motion sensor": AppConstants.icons.motionSensor,
  Bridge: AppConstants.icons.bridge,
  Infuse: AppConstants.icons.ceilingLight,
  "Hue Play": AppConstants.icons.tableLight,
  "Hue Floor": AppConstants.icons.floorLight,
  Unknown: AppConstants.icons.unknownDevice,
};
