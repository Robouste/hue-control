import { HueProductArchetype } from "@common/types";

export interface HueProductDataEntity {
  model_id: string;
  manufacturer_name: string;
  product_name: string;
  product_archetype: HueProductArchetype;
  certified: boolean;
  software_version: string;
  hardware_platform_type?: string;
}
