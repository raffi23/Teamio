import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: 'red' | 'teal' | 'yellow';
  @Input() shadow: boolean = false;
  @Input() isLarge: boolean = false;
  @Input() isBold: boolean = false;
  @Input() varient: 'primary' | 'secondary' | 'gradient';
  classes: object;

  constructor() {}

  ngOnInit(): void {
    this.classes = {
      red: this.color === 'red',
      yellow: this.color === 'yellow',
      teal: this.color === 'teal',
      'has-shadow': this.shadow,
      large: this.isLarge,
      bold: this.isBold,
      primary: this.varient === 'primary',
      secondary: this.varient === 'secondary',
      gradient: this.varient === 'gradient',
    };
  }
}
