import { Subscription } from 'rxjs';
import { CarouselService } from './../carousel.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nic-slide',
  template: `
    <div [ngStyle]="{ width: slideWidth + 'px' }">
      <ng-content>
      </ng-content>
    </div>
  `,
  styles: [`
      div {
        display: inline-block;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent implements OnDestroy {

  private readonly subs = new Subscription();

  slideWidth: number;

  constructor(
    service: CarouselService,
    private detector: ChangeDetectorRef,
  ) {
    this.subs.add(service.listenToSlideWidth
      .subscribe(slideWidth => {
        this.slideWidth = slideWidth;
        this.detector.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
