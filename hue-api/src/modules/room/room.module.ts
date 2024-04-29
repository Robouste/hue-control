import { Module } from "@nestjs/common";
import { AxiosModule } from "src/core";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";

@Module({
  controllers: [RoomController],
  providers: [RoomService],
  imports: [AxiosModule],
})
export class RoomModule {}
