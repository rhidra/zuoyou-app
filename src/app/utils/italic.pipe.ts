import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italic'
})
export class ItalicPipe implements PipeTransform {

  transform(s: string): string {
    return s.replace(/_([^*]*)_/gm, '<em>$1</em>');

  }

}
