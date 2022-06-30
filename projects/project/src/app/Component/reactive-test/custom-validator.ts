import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidProjectName(control: AbstractControl): {[s: string]: boolean}  | null {
        if (control.value === 'Test') {
            return {'invalidProjectName': true};
        } else {
            return null;
        }
    }

    static asyncInvalidProjectName(control: AbstractControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Testproject') {
                    resolve({'invalidProjectName': true})
                } else {
                    resolve(null);
                }
            }, 2000)
        });

        return promise;
    }
}