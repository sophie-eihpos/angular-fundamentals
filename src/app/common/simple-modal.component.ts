import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core"
import { JQUERY_TOKEN } from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html',
    styles: [`
        .modal-body {
            height: 250px;
            overflow-y: scroll;
        }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') modalContainerEl: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private $: any) {
    }

    closeModal() {
        if(this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            this.$(this.modalContainerEl.nativeElement).modal('hide');
        }
    }
}
