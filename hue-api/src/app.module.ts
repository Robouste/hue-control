import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AxiosModule } from "./core";
import { DeviceModule } from "./modules/device/device.module";
import { LightModule } from "./modules/light/light.module";
import { RoomModule } from "./modules/room/room.module";

@Module({
  imports: [AxiosModule, RoomModule, LightModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
