import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.scss'],
})
export class TechIconComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
