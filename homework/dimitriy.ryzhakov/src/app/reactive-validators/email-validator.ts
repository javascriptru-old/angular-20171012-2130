import {FormControl} from "@angular/forms";

export const emailValidator = (control: FormControl) => {
  const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!EMAIL_REGEXP.test(control.value)) {
    return {emailValidator: {error: 'Not valid Email'}};
  }
  return null;
};
