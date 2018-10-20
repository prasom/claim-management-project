/**
 * Marks all controls in a form group as touched
 * @param formGroup - type FormGroup or FormArray
 */
import { FormGroup, FormArray } from '@angular/forms';

export function markFormGroupTouched(formGroup: FormGroup | FormArray) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      markFormGroupTouched(control);
    }
  });
}

export function markFormGroupUntouched(formGroup: FormGroup | FormArray) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsUntouched();

    if (control.controls) {
      markFormGroupUntouched(control);
    }
  });
}

export function markFormGroupDirty(formGroup: FormGroup | FormArray) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsDirty();

    if (control.controls) {
      markFormGroupDirty(control);
    }
  });
}

export function markFormGroupPristine(formGroup: FormGroup | FormArray) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsPristine();

    if (control.controls) {
      markFormGroupPristine(control);
    }
  });
}
