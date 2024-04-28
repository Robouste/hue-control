import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiConstants } from "./api.constants";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { axiosFactory } from "./core/axios.factory";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, axiosFactory],
  exports: [ApiConstants.axiosInjectionToken],
})
export class AppModule {}
