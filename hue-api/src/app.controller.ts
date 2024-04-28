import { HueDevice } from "@common/dtos";
import { Controller, Get, Param } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getDevices(): Promise<HueDevice[]> {
    return this.appService.getDevices();
  }

  @Get("/init")
  public initApi(): Promise<AxiosResponse> {
    return this.appService.initApi();
  }

  @Get("/light-status/:serviceId")
  public getLightStatus(
    @Param() params: { serviceId: string },
  ): Promise<unknown> {
    return this.appService.getLightStatus(params.serviceId);
  }
}
