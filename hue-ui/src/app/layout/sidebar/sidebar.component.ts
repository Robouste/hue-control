import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AppConstants } from "../../core/app.constants";
import { IconComponent } from "../../ui-kit";
import { menuItems } from "./menu-items";

@Component({
  selector: "hue-sidebar",
  standalone: true,
  imports: [CommonModule, IconComponent, RouterModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  protected menuItems = menuItems;
  protected icons = AppConstants.icons;

  constructor(protected router: Router) {}
}
