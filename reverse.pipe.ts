import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

// <p>{{ 'hello world' | reverse }}</p>
// <!-- Output: "dlrow olleh" -->
