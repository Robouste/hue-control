import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { readFileSync } from "fs";
import { Agent } from "https";
import { ApiConstants } from "src/api.constants";
import { PeerCertificate } from "tls";

export const axiosFactory: Provider = {
  provide: ApiConstants.axiosInjectionToken,
  useFactory: (configService: ConfigService) => {
    // get certifacate from https://developers.meethue.com/develop/application-design-guidance/using-https/
    // or run this command from linux: `openssl s_client -showcerts -connect <bridge-ip>:443` and get stuff from -----BEGIN CERTIFICATE----- to -----END CERTIFICATE----- (inclusive)
    const ca = readFileSync("bridge-cert.pem");
    const hueBridgeIp = configService.get<string>("HUE_BRIDGE_IP");
    const hueBridgeId = configService.get<string>("HUE_BRIDGE_ID");
    const hueApplicationKey = configService.get<string>("HUE_BRIDGE_USERNAME");

    return axios.create({
      baseURL: `https://${hueBridgeIp}`,
      headers: {
        "hue-application-key": hueApplicationKey,
      },
      httpsAgent: new Agent({
        ca,
        checkServerIdentity: (
          _: string,
          cert: PeerCertificate,
        ): Error | undefined => {
          if (cert.subject.CN === hueBridgeId.toLocaleLowerCase()) {
            return undefined;
          }

          return new Error(
            "Server identity check failed, CN does not match bridge ID",
          );
        },
      }),
    });
  },
  inject: [ConfigService],
};
