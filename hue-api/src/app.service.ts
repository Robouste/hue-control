import { Device, LightStatus } from "@common/dtos";
import { Inject, Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosResponse } from "axios";
import { ApiConstants } from "./api.constants";
import { DeviceEntity, LightStatusEntity } from "./entities";
import { DeviceMapper, LightStatusMapper } from "./mappers";

@Injectable()
export class AppService {
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

  /**
   * Used only the first time to get the key after pressing LINK button on bridge.
   *
   * Shouldn't have to be used anymore
   */
  public async initApi(): Promise<AxiosResponse> {
    const result = await this._axios.post(`/api`, {
      devicetype: "app_name#instance_name",
      generateclientkey: true,
    });

    return result.data;
  }

  public async getLightStatus(serviceId: string): Promise<LightStatus> {
    const result: AxiosResponse<{ data: LightStatusEntity[] }> =
      await this._axios.get(`/clip/v2/resource/light/${serviceId}`);

    return result.data.data
      .map((status) => LightStatusMapper.toDto(status))
      .at(0);
  }
}
