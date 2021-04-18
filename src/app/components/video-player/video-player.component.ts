import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MediaPlayer, MediaPlayerClass } from 'dashjs';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  player: MediaPlayerClass;
  isPlaying: boolean;
  videos: string[] = [
    'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
    'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
  ];
  currentVideo: number = 0;

  @ViewChild('videoplayer') videoplayer: ElementRef;
  @Input() src: string;
  @Input() autoplay: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.player = MediaPlayer().create();
    this.player.initialize(
      this.videoplayer.nativeElement,
      this.src || this.videos[0],
      this.autoplay
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.src.firstChange) {
      this.onVideoChange();
    }
  }

  ngOnDestroy(): void {
    this.player.reset();
  }

  play(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.player.play();
      this.isPlaying = true;
    }
  }

  pause(): void {
    this.player.pause();
    this.isPlaying = false;
  }

  onVideoChange(): void {
    this.player.attachSource(this.src);
  }

  setCurrentVideo(index: number): void {
    this.currentVideo = index;
  }

  setToggleClasses(index: number) {
    let classes = {
      selected: index === this.currentVideo,
    };

    return classes;
  }
}
