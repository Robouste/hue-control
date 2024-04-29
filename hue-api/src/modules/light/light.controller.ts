import { LightStatus } from "@common/dtos";
import { Controller, Get, Param } from "@nestjs/common";
import { LightService } from "./light.service";

@Controller("light")
export class LightController {
  constructor(private readonly _service: LightService) {}

  @Get("/status/:serviceId")
  public getLightStatus(
    @Param() params: { serviceId: string },
  ): Promise<LightStatus> {
    return this._service.getLightStatus(params.serviceId);
  }
}
