import { Room } from "@common/dtos";
import { Controller, Get } from "@nestjs/common";
import { RoomService } from "./room.service";

@Controller("room")
export class RoomController {
  constructor(private readonly _service: RoomService) {}

  @Get()
  public getAll(): Promise<Room[]> {
    return this._service.getAll();
  }
}
