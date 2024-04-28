import { environment } from "../../environments/environment";

export class AppConstants {
  public static icons = {
    home: "home",
    devices: "devices_other",
    lightstrip: "cable",
    bulb: "emoji_objects",
    dimmer: "missing_controller",
    motionSensor: "sensors",
    bridge: "hub",
    ceilingLight: "light",
    tableLight: "table_lamp",
    floorLight: "scene",
    unknownDevice: "indeterminate_question_box",
  };
  public static apiUrl = environment.apiUrl;
  public static isProd = environment.production;
}
