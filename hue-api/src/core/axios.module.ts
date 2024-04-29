import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiConstants } from "./api.constants";
import { axiosFactory } from "./axios.factory";

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [axiosFactory],
  exports: [ApiConstants.axiosInjectionToken],
})
export class AxiosModule {}
