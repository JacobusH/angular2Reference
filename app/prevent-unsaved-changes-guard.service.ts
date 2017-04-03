import {CanDeactivate} from '@angular/router';
import {MessagesComponent} from './messages.component';
import {FormGroup} from '@angular/forms';

export interface FormComponent
{
    form: FormGroup;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent>
{
    canDeactivate(component: FormComponent)
    {
        if(component.form.dirty)
        {
            return confirm("Are you sure?");
        }

        return true;
    }
}