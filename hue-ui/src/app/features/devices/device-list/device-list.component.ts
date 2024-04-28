import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AppConstants } from "@core/app.constants";
import { DeviceService } from "@services/device.service";
import { PageTitleComponent } from "@ui-kit/page-title";
import { tap } from "rxjs";
import { DeviceCardComponent } from "../components";

@Component({
  selector: "hue-device-list",
  standalone: true,
  imports: [CommonModule, PageTitleComponent, DeviceCardComponent],
  templateUrl: "./device-list.component.html",
  styleUrl: "./device-list.component.scss",
})
export class DeviceListComponent {
  protected title = "";
  protected icons = AppConstants.icons;
  protected devices$ = this._deviceService.getAll().pipe(
    tap(
      (devices) =>
        (this.totalPrice = devices
          .flatMap((device) => device.productData)
          .reduce((acc, deviceData) => acc + deviceData.price, 0)),
    ),
    tap(() => (this.title = `Devices (${this.totalPrice}€)`)),
  );
  protected totalPrice = 0;

  constructor(private _deviceService: DeviceService) {}
}
