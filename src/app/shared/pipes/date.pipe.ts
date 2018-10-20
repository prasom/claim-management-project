import { Pipe, PipeTransform } from '@angular/core';
import * as  moment from 'moment';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'dateTh' })
export class DateThPipe implements PipeTransform {

    readonly months: string[] = [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
    ];

    transform(value: any): string {
        if (value) {
            const date = moment(value).toDate();
            return `${date.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} ${this.months[date.getMonth() + 1]} ${date.getFullYear() + 543}`;
        } else {
            return value;
        }
    }
}



