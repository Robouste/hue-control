import { Module } from "@nestjs/common";
import { AxiosModule } from "src/core";
import { LightController } from "./light.controller";
import { LightService } from "./light.service";

@Module({
  controllers: [LightController],
  providers: [LightService],
  imports: [AxiosModule],
})
export class LightModule {}
