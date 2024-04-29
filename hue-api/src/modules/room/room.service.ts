import { Room } from "@common/dtos";
import { ApiConstants } from "@core/api.constants";
import { Inject, Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosResponse } from "axios";
import { RoomMapper } from "./mappers/room.mapper";
import { RoomEntity } from "./models/room.entity";

@Injectable()
export class RoomService {
  constructor(
    @Inject(ApiConstants.axiosInjectionToken) private _axios: AxiosInstance,
  ) {}

  public async getAll(): Promise<Room[]> {
    const result: AxiosResponse<{ data: RoomEntity[] }> = await this._axios.get(
      `/clip/v2/resource/room`,
    );

    return result.data.data.map((room) => RoomMapper.toDto(room));
  }
}
