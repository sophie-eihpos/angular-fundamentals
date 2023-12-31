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
        // because jquery has to use any type not unknown type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        @Inject(JQUERY_TOKEN) private $: any
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