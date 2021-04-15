import { Component, HostListener, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nic-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowComponent {

  @Input() rotate = false;
  @Input() disabled: boolean;
  @Output() whenClicked = new EventEmitter();;

  @HostListener('click') click() {
    if(!this.disabled) {
      this.whenClicked.emit();
    }
  }
}
