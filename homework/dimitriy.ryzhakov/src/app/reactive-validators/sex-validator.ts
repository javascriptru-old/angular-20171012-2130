import {FormControl} from "@angular/forms";

export const sexValidator = (control: FormControl) => {
  if (!control.value) {
    return { sexValidator: {error: 'Select your gender'}};
  }
  return null;
};
