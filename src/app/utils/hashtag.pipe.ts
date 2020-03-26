import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtag'
})
export class HashtagPipe implements PipeTransform {

  transform(s: string): string {
    console.log(s);
    return s.replace(/(#\S+)/gm, '<span class="hastag">$1</span>');
  }
}
