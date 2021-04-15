import { SlideComponent } from './slide/slide.component';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class CarouselService {


  listenToSlideWidth = new Subject<number>();
  listenToSlideIndex = new Subject<number>();
  listenToSlides = new Subject<SlideComponent[]>();


  shareSlides(slides: SlideComponent[]): void {
    this.listenToSlides.next(slides);
  }


  shareSlideWidth(slideWidth: number) {
    this.listenToSlideWidth.next(slideWidth);
  }


  shareSlideIndex(slideIndex: number) {
    this.listenToSlideIndex.next(slideIndex);
  }
}
