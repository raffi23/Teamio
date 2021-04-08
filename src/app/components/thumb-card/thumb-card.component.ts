import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb-card',
  templateUrl: './thumb-card.component.html',
  styleUrls: ['./thumb-card.component.scss'],
})
export class ThumbCardComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;
  @Input() color: string;
  @Input() isExtended: boolean;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log('button clicked from thumb-card');
  }

  setClasses() {
    let classes = {
      [this.color]: this.color && true,
      'w-100': this.isExtended,
      'p-0': this.isExtended,
    };
    return classes;
  }
}
