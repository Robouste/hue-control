import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppConstants } from "./core/app.constants";
import { LayoutComponent } from "./layout/layout.component";

@Component({
  selector: "hue-root",
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor() {
    console.log("isProd", AppConstants.isProd);
    console.log("apiUrl", AppConstants.apiUrl);
  }
}
