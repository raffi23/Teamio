import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
