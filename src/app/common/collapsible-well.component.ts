import { Component } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    // no need anymore since we are using ng-content for content projection now
    // @Input() title: string;

    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}