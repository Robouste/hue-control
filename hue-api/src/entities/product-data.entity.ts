import { ProductArchetype } from "@common/types";

export interface ProductDataEntity {
  model_id: string;
  manufacturer_name: string;
  product_name: string;
  product_archetype: ProductArchetype;
  certified: boolean;
  software_version: string;
  hardware_platform_type?: string;
}
