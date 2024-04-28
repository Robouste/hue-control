import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IconComponent } from "../icon";

@Component({
  selector: "hue-page-title",
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: "./page-title.component.html",
  styleUrl: "./page-title.component.scss",
})
export class PageTitleComponent {
  @Input()
  public icon?: string;
  @Input({ required: true })
  public title: string = "";
}
