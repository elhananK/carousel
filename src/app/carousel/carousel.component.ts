import { CarouselService } from './carousel.service';
import { SlideComponent } from './slide/slide.component';
import { EventEmitter, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostListener, Input, OnDestroy, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nic-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  private readonly subs = new Subscription();

  slideIndex = 0;
  slideWidth: number;

  @HostListener('window:resize') winResize() {
    this.updateCarousel();
  }

  @ViewChild('carouselRef') carouselRef: ElementRef<HTMLElement>;
  @ViewChildren('checkboxRef') checkboxsRef: QueryList<ElementRef<HTMLInputElement>>;
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  @Output() slideIndexChange = new EventEmitter<number>();


  constructor(
    private service: CarouselService,
    private detector: ChangeDetectorRef,
  ) {
    this.subs.add(service.listenToSlideIndex
      .subscribe(slideIndex => {
        this.updateCheckboxes(slideIndex);
        detector.detectChanges();
      }));
  }


  ngAfterViewInit(): void {
    this.updateCarousel();
    console.log(this.slides);
    this.service.shareSlides(this.slides.toArray());
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  updateCarousel() {
    const rect: DOMRect = this.carouselRef.nativeElement.getBoundingClientRect();
    this.slideWidth = rect.width / 3;
    this.service.shareSlideWidth(this.slideWidth);
    this.updateCheckboxes(this.slideIndex);
    this.detector.detectChanges();
  }


  arrowClicked(increment: number): void {
    this.service.shareSlideIndex(this.slideIndex + increment);
  }


  focus(index: number): void {
    this.updateCheckboxes(index);
  }

  keyup($event: KeyboardEvent): void {
    console.log($event);
    const index = this.checkboxsRef.toArray().findIndex(cb => cb.nativeElement.checked);
    switch ($event.code) {
      case 'ArrowRight':
        this.updateCheckboxes(index + 1);
        break;
      case 'ArrowLeft':
        this.updateCheckboxes(index - 1);
        break;
    }
  }

  private updateCheckboxes(slideIndex: number): void {

    if (slideIndex % 3 === 0) {
      this.slideIndex = slideIndex;
    }
    this.checkboxsRef.toArray()
      .forEach((checkbox, index) => {
        checkbox.nativeElement.checked = slideIndex === index;

        if (checkbox.nativeElement.checked) {
          checkbox.nativeElement.focus();
          this.slideIndexChange.emit(index);
        }
      });
  }

}
