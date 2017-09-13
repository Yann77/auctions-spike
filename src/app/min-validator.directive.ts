import {Validator, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[bidMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}]
})
export class MinValidatorDirective implements Validator {
  @Input() bidMin: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const currentValue = control.value;
    const isValid = currentValue > this.bidMin;

    return isValid ? null : {
      bidMin: {
        valid: false
      }
    };
  }
}
