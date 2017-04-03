import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, AsyncValidatorFn, FormBuilder} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/subscription-form.component.html'
})
export class SignUpFormComponent
{
    form : FormGroup;

    constructor(fb: FormBuilder)
    {
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    }

    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });

    signup()
    {
        
        this.form.controls['username'].setErrors({
            invalidLogin: true
        })
    }
}