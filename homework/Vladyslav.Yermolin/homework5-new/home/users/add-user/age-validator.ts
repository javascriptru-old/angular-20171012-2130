export default function (allowedAge) {
    return function ageValidator(formControl) {
        const birthdate = new Date(formControl.value);
        const now = new Date();
        const age = (now.valueOf() - birthdate.valueOf()) / 3.154e10;
        const output = (age < allowedAge)
            ? {ageValidator: {message: 'To young!'}}
            : null;
        return output;
    }
}
