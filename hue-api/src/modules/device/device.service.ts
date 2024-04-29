import { Device } from "@common/dtos";
import { ApiConstants } from "@core/api.constants";
import { DeviceEntity } from "@entities/device.entity";
import { DeviceMapper } from "@mappers/device.mapper";
import { Inject, Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosResponse } from "axios";

@Injectable()
export class DeviceService {
  constructor(
    @Inject(ApiConstants.axiosInjectionToken) private _axios: AxiosInstance,
  ) {}

  public async getDevices(): Promise<Device[]> {
    try {
      const result: AxiosResponse<{ data: DeviceEntity[] }> =
        await this._axios.get(`/clip/v2/resource/device`);

      return result.data.data.map((device: DeviceEntity) =>
        DeviceMapper.toDto(device),
      );
    } catch (e) {
      console.error(e);
    }
  }
}
