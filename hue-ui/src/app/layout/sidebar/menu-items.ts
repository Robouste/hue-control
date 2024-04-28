import { Params } from "@angular/router";
import { AppConstants } from "../../core/app.constants";

export interface MenuItem {
  icon: string;
  label: string;
  route: string;
  queryParams?: Params | null;
}

export const menuItems: MenuItem[] = [
  {
    icon: AppConstants.icons.devices,
    label: "Devices",
    route: "/devices",
  },
];
