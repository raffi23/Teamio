import { Component, OnInit } from '@angular/core';
import { TechItem } from 'src/app/models/TechItem';

@Component({
  selector: 'app-fold-nine',
  templateUrl: './fold-nine.component.html',
  styleUrls: ['./fold-nine.component.scss'],
})
export class FoldNineComponent implements OnInit {
  technologies: TechItem[] = [
    {
      icon: '../../../assets/images/tech-icons/java.svg',
      title: 'java',
    },
    {
      icon: '../../../assets/images/tech-icons/js.svg',
      title: 'javascript',
    },
    {
      icon: '../../../assets/images/tech-icons/react.svg',
      title: 'react',
    },
    {
      icon: '../../../assets/images/tech-icons/angular.svg',
      title: 'angular',
    },
    {
      icon: '../../../assets/images/tech-icons/android.svg',
      title: 'android',
    },
    {
      icon: '../../../assets/images/tech-icons/nodejs.svg',
      title: 'node js',
    },
    {
      icon: '../../../assets/images/tech-icons/dot-net.svg',
      title: '.net',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
