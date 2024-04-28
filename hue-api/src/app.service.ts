import { Inject, Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosResponse } from "axios";
import { ApiConstants } from "./api.constants";

@Injectable()
export class AppService {
  constructor(
    @Inject(ApiConstants.axiosInjectionToken) private _axios: AxiosInstance,
  ) {}

  public async getDevices(): Promise<AxiosResponse> {
    try {
      const result = await this._axios.get(`/clip/v2/resource/device`);

      return result.data;
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
}
