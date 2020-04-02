import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe Bold
 * Parse the input string and put the parts between '*' in bold.
 */
@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(s: string): string {
    return s.replace(/\*([^*]*)\*/gm, '<strong>$1</strong>');
  }
}
