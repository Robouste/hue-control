import { Routes } from "@angular/router";
import { DeviceListComponent } from "./features/devices/device-list/device-list.component";

export const routes: Routes = [
  {
    path: "devices",
    component: DeviceListComponent,
  },
  {
    path: "**",
    redirectTo: "devices",
  },
];
