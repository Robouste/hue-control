import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

@Component({
  selector: "hue-icon",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
})
export class IconComponent {
  @Input({ required: true })
  public icon: string = "";

  @Input()
  public size: IconSize = "md";

  protected iconSizes: Record<IconSize, string> = {
    xs: "16px",
    sm: "20px",
    md: "24px",
    lg: "28px",
    xl: "32px",
  };
}
