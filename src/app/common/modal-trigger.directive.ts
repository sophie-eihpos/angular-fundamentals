import { Directive, ElementRef, Inject, OnInit } from "@angular/core";
import { JQUERY_TOKEN } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;

    constructor(elementRef: ElementRef,
        @Inject(JQUERY_TOKEN) private $: any
    ) {
        this.el = elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({
                // configuration object
            });
        })
        
    }
}