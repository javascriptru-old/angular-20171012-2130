import {FormControl} from "@angular/forms";

function get_current_age(date) {
  return ((+new Date().getTime() - +new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

export const birthdateValidator = (control: FormControl) => {
  if (get_current_age(control.value) < 18) {
    return {birthdatValidator: {error: 'You are no 18 years old'}};
  }
  return null;
};
