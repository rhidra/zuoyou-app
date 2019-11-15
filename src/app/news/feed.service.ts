import { Injectable } from '@angular/core';
import {NewsItem} from '../models/newsitem.model';
import {NewsPanel} from '../models/newspanel.model';
import {NewsHome} from '../models/newshome.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  newsList: Array<NewsItem> = [];
  home: NewsHome;

  constructor() { }

  load() {
    return new Promise(resolve => {
      this.home = new NewsHome('1. Shanghai Expo<br/>2. Elon Musk builds new train in SH<br/>' +
        '3. Lorem ipsum dolor sit amet<br/>4. Aliquam libero tellus, vulputate ut dui vitae<br/>5. Consectetur adipiscing elit',
        'assets/img/home.jpg');

      const p1 = new NewsPanel('Interesting story !!', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        'assets/img/badu-live.png');
      const p2 = new NewsPanel('Another Interesting story !!', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        'assets/img/img1.jpg');
      const p3 = new NewsPanel('Something boring', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        'assets/img/img2.jpg');
      const p4 = new NewsPanel('Super true story !', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        '', 'assets/img/img3.jpg');
      const p5 = new NewsPanel('Super not true story !', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p6 = new NewsPanel('True story !', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p7 = new NewsPanel('Wow a story !!!', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p1v = new NewsPanel('True story !', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        '', '', 'assets/videos/rendu.mp4');
      const p1fv = new NewsPanel('Wow a story !!!', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        '', '', '', 'assets/videos/rendu.mp4');

      this.newsList.push(new NewsItem(p1fv, p2, p3));
      this.newsList.push(new NewsItem(p1v, p3, p4));
      this.newsList.push(new NewsItem(p3, p4, p5));
      this.newsList.push(new NewsItem(p4, p5, p6));
      this.newsList.push(new NewsItem(p7, p1, p2));
      this.newsList.push(new NewsItem(p1, p2, p3));
      this.newsList.push(new NewsItem(p2, p3, p4));
      resolve();
    });
  }
}
