import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  ngAfterViewInit(): void
  {
    this._play();
  }

  /**
   * Force to play the video even if autoplay attribute does not work
   * @protected
   */
  protected _play(): void
  {
    this.video.nativeElement.play();
  }

  reload(): void
  {
    window.location.reload();
  }
}
