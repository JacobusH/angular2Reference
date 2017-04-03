import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform
{
    transform(value: string, length: string)
    {
        var limit = (length) ? parseInt(length) : 50;

        if(value)
        {
            return value.substring(0, limit) + '...'
        }
    }
}