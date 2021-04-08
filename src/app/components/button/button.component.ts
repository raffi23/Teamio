import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() red: boolean = false;
  @Input() yellow: boolean = false;
  @Input() teal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // [ngClass] method enables classes based on props
  setClasses() {
    let classes = {
      'btn-danger': this.red,
      'btn-warning': this.yellow,
      'btn-info': this.teal,
    };

    return classes;
  }
}
