import { Module } from "@nestjs/common";
import { AxiosModule } from "src/core";
import { DeviceController } from "./device.controller";
import { DeviceService } from "./device.service";

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  imports: [AxiosModule],
})
export class DeviceModule {}
