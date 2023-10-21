import { FormControl } from "@angular/forms";

export function restrictedWords(words: string[]) {
    return (control: FormControl): { [key: string]: string } => {
        if (!words) return null;

        const invalidWords = words
            .map((w) => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        // cannot use quotes around restrictedWords in the return object in Angular 16
        return invalidWords && invalidWords.length > 0
            ? { restrictedWords: invalidWords.join(', ') }
            : null;
    }
}
