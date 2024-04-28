import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: "hue-layout",
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
