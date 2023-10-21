import { Directive } from "@angular/core";
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    providers: [{
        provide: NG_VALIDATORS, 
        useExisting: LocationValidator, 
        multi: true
    }]
})
export class LocationValidator implements Validator {
    // angular 16 has ValidationErrors for the return type
    // validate(fromGroup: FormGroup): { [key: string]: any} {
    
    validate(fromGroup: FormGroup): ValidationErrors {
        const addressControl = fromGroup.controls['address'];
        const cityControl = fromGroup.controls['city'];
        const countryControl = fromGroup.controls['country'];
        const onlineUrlControl = (<FormGroup>fromGroup.root).controls['onlineUrl'];

        if((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value) 
            || (onlineUrlControl && onlineUrlControl.value)) {
                return null;
        }
        else {
            return { validateLocation: false};
        }
    }

    // validate(control: AbstractControl<any, any>): ValidationErrors {
    //     throw new Error("Method not implemented.");
    // }
    
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }
}
