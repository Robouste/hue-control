import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Device } from "@common/dtos";
import { AppConstants } from "@core/app.constants";
import { DeviceService } from "@services/device.service";
import { RoomService } from "@services/room.service";
import { PageTitleComponent } from "@ui-kit/page-title";
import { Observable, combineLatest, map, tap } from "rxjs";
import { DeviceCardComponent } from "../components";

interface RoomAndDevices {
  name: string;
  devices: Device[];
}

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
  protected rooms$ = this._roomService.getAll();

  protected roomsAndDevices$: Observable<RoomAndDevices[]> = combineLatest([
    this.devices$,
    this.rooms$,
  ]).pipe(
    map(([devices, rooms]) => {
      const roomLessDevices = devices.slice();
      const roomsWithDevices: RoomAndDevices[] = [];

      for (const room of rooms) {
        for (const child of room.children) {
          const index = roomLessDevices.findIndex(
            (device) => device.id === child.id,
          );

          if (index !== -1) {
            roomLessDevices.splice(index, 1);
          }

          const existingRoom = roomsWithDevices.find(
            (r) => r.name === room.metadata.name,
          );
          const device = devices.find((device) => device.id === child.id);

          if (!device) {
            console.error(`Device with id ${child.id} not found`);
            throw new Error(`Device with id ${child.id} not found`);
          }

          if (existingRoom) {
            existingRoom.devices.push(device);
          } else {
            roomsWithDevices.push({
              name: room.metadata.name,
              devices: [device],
            });
          }
        }
      }

      roomsWithDevices.push({
        name: "Others",
        devices: roomLessDevices,
      });

      return roomsWithDevices;
    }),
  );

  constructor(
    private _deviceService: DeviceService,
    private _roomService: RoomService,
  ) {}
}
