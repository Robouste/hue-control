import { LightStatus } from "@common/dtos";
import { ApiConstants } from "@core/api.constants";
import { LightStatusEntity } from "@entities/light-status.entity";
import { LightStatusMapper } from "@mappers/light-status.mapper";
import { Inject, Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosResponse } from "axios";

@Injectable()
export class LightService {
  constructor(
    @Inject(ApiConstants.axiosInjectionToken) private _axios: AxiosInstance,
  ) {}

  public async getLightStatus(serviceId: string): Promise<LightStatus> {
    const result: AxiosResponse<{ data: LightStatusEntity[] }> =
      await this._axios.get(`/clip/v2/resource/light/${serviceId}`);

    return result.data.data
      .map((status) => LightStatusMapper.toDto(status))
      .at(0);
  }
}
