import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Device } from "@common/dtos";
import { AppConstants } from "@core/app.constants";
import { iconMapping } from "@helpers/icons-mapping";
import { LightService } from "@services/light.service";
import { IconComponent } from "@ui-kit/icon";

@Component({
  selector: "hue-device-card",
  standalone: true,
  imports: [CommonModule, MatCardModule, IconComponent],
  templateUrl: "./device-card.component.html",
  styleUrl: "./device-card.component.scss",
})
export class DeviceCardComponent implements OnInit {
  @Input({ required: true }) device: Device | undefined;

  protected deviceIcon = AppConstants.icons.unknownDevice;
  protected lightColor: string | null = null;
  protected isOn = false;

  constructor(private _lightService: LightService) {}

  public ngOnInit(): void {
    if (this.device) {
      console.log("device", this.device);
      this.deviceIcon = iconMapping[this.device.productData.humanName];

      const lightService = this.device.services.find(
        (service) => service.type === "light",
      );

      if (lightService) {
        this._lightService.getStatus(lightService.id).subscribe((status) => {
          if (status.on.on) {
            this.lightColor = status.color.rgb;
          }

          this.isOn = status.on.on;
        });
      }
    }
  }
}
