import { SlideComponent } from './../slide/slide.component';
import { CarouselService } from './../carousel.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nic-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnDestroy {

  private readonly subs = new Subscription();

  slides: SlideComponent[];
  slideIndex = 0;

  constructor(
    detector: ChangeDetectorRef,
    private service: CarouselService,
  ) {
    this.subs.add(service.listenToSlides
      .subscribe(slides => {
        this.slides = slides;
        detector.detectChanges();
    }));
    this.subs.add(service.listenToSlideIndex
      .subscribe(slideIndex => {
        this.slideIndex = slideIndex;
        detector.detectChanges();
    }));
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }



  slideCarousel(index: number): void {
    this.service.shareSlideIndex(index);
  }

}
