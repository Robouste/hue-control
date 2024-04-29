import { Device } from "@common/dtos";
import { Controller, Get } from "@nestjs/common";
import { DeviceService } from "./device.service";

@Controller("device")
export class DeviceController {
  constructor(private readonly _service: DeviceService) {}

  @Get()
  public getDevices(): Promise<Device[]> {
    return this._service.getDevices();
  }
}
