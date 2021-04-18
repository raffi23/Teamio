import { Component, OnInit } from '@angular/core';
import { DetailCard } from 'src/app/models/DetailCard';

@Component({
  selector: 'app-fold-seven',
  templateUrl: './fold-seven.component.html',
  styleUrls: ['./fold-seven.component.scss'],
})
export class FoldSevenComponent implements OnInit {
  cards: DetailCard[] = [
    {
      image: '../../../../assets/images/cards-images/git.svg',
      title: 'Quality',
      description:
        'Agency experienced, in-house, full time, degreed designers and developers No outsourcing.',
    },
    {
      image: '../../../../assets/images/cards-images/thumbs-up.svg',
      title: 'Efficient',
      description:
        'Simple Processes, effective projects managment. Create a task & revise to  Perfection.',
    },
    {
      image: '../../../../assets/images/cards-images/tick.svg',
      title: 'Affordable',
      description:
        'Unlimited projects for a low cost, flat monthly fee, no hidden costs, contracts.',
    },
    {
      image: '../../../../assets/images/cards-images/mobile.svg',
      title: 'Responsive',
      description:
        'Quick 1-5 day turnaround or most projects, simple team collaboration, fanatical customer support.',
    },
    {
      image: '../../../../assets/images/cards-images/wifi-none.svg',
      title: 'Simple',
      description:
        'Guided online project submission, easy to use proofing tools, and one click project approvals.',
    },
    {
      image: '../../../../assets/images/cards-images/google-streetview.svg',
      title: 'Trusted',
      description:
        '100% rights & product ownership, copyright guarantee, no royalties or licenses.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
