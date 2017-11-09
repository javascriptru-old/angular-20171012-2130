import {FormControl} from "@angular/forms";

export const nameValidator = (control: FormControl) => {
  if (!control.value || control.value.length < 2) {
    return {nameValidator: {error: 'To short'}};
  }
  return null;
};
