import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQUERY_TOKEN } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    // does not allow dash in the property name @Input modal-trigger: string;
    @Input('modal-trigger') modalId: string;    

    constructor(elementRef: ElementRef,
        @Inject(JQUERY_TOKEN) private $: unknown
    ) {
        this.el = elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', () => {

            // instead of hardcoded modal id, use Input property
            // so that one page could have multiple modals if it's needed
            this.$(`#${this.modalId}`).modal({});

            // this.$('#simple-modal').modal({
            //     // configuration object
            // });
        })
        
    }
}