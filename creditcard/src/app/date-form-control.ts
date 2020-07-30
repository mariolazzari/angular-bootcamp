import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string, options: any) {
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
