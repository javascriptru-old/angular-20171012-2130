export namespace getAge {

  export function fromString(birthday: string): number {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    if (isNaN(age)) {
      return -1;
    }

    return age;
  }

}
