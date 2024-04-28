/**
 * candle_bulb => small bulb
 * sultan_bulb => big bulb
 * ceiling_round => Hue infuse (ceiling light)
 * hue_play => Hue play light bar (goodies light)
 * unknown_archetype => dimmers and sensors fall into this type
 * floor_shade => Vertical light
 */

export type HueProductArchetype =
  | "hue_lightstrip"
  | "candle_bulb"
  | "sultan_bulb"
  | "unknown_archetype"
  | "ceiling_round"
  | "hue_play"
  | "bridge_v2"
  | "floor_shade";
