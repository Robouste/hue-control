import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MaterialCssVarsModule } from "angular-material-css-vars";
import { routes } from "./app.routes";
import { apiInterceptorProvider } from "./core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom([
      HttpClientModule,
      MaterialCssVarsModule.forRoot({
        primary: "#00BCD4",
        accent: "#2196F3",
        warn: "#e81e1e",
        isAutoContrast: false,
        isDarkTheme: true,
      }),
    ]),
    apiInterceptorProvider,
  ],
};
