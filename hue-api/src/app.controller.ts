import { Controller, Get } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/init")
  public initApi(): Promise<AxiosResponse> {
    return this.appService.initApi();
  }
}
