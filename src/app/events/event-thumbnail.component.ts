import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <!-- escape the dollar sign -->
            <div>price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `
})
export class EventThumbnailComponent {
    @Input() event:any;
    someProperty:string = "some string value to pass from child component to parent component";

    logEventName() {
        console.log(this.event.name);
    }

}