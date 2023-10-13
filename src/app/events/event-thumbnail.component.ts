import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail" *ngIf="event">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <!-- escape the dollar sign -->
      <div>price: \${{ event?.price }}</div>
      <div *ngIf="event.location">
        <span>Location: {{ event?.location.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div *ngIf="event.onlineUrl">
        Online URL: {{ event?.onlineUrl }}
      </div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;
}
