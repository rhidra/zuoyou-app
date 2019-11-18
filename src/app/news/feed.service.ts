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
      this.home = new NewsHome('1. <b>Elon Musk</b> builds new train in SH<br/>2. Kim Kardashian teams up with <b>Taobao</b> for 11.11<br/>' +
        '3. Meet the world\'s <b>youngest</b> engineering student<br/>4. The story behind <b>网红</b><br/>5. Here\'s how Americans celebrate <b>Thanksgiving</b> in SH',
        'assets/img/img7.jpg');

      const p1c = new NewsPanel('Elon Musk builds new train in SH', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis',
        'assets/img/img5.jpg');
      const p1l = new NewsPanel('Super not true story !', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p1r = new NewsPanel('True story !', '', '', 'assets/img/img6.jpg');

      const p2c = new NewsPanel('Kim Kardashian teams up with Taobao for 11.11', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        'assets/img/img1.jpg');
      const p2l = new NewsPanel('Exhibition', '', '', 'assets/img/img3.jpg');
      const p2r = new NewsPanel('', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.',
        'assets/img/home.jpg');

      const p3c = new NewsPanel('Meet the world\'s youngest engineering student', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p3l = new NewsPanel('', '', '', 'assets/img/img3.jpg');
      const p3r = new NewsPanel('True story !', '', '', 'assets/img/img2.jpg');

      const p4c = new NewsPanel('The story behind 网红', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p4l = new NewsPanel('Title', '',
        '', 'assets/img/img2.jpg');
      const p4r = new NewsPanel('', '', '', 'assets/img/img4.jpg');

      const p5c = new NewsPanel('Here\'s how Americans celebrate Thanksgiving in SH', '<b>Who:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat.<br/>' +
        '<b>What:</b> tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum<br/>' +
        '<b>When:</b> cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula.<br/>' +
        '<b>Where:</b> Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui.<br/>' +
        '<b>Why:</b> Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis<br/> ' +
        '<b>How:</b> iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa.');
      const p5l = new NewsPanel('');
      const p5r = new NewsPanel('');

      this.newsList.push(new NewsItem(p1c, p1l, p1r));
      this.newsList.push(new NewsItem(p2c, p2l, p2r));
      this.newsList.push(new NewsItem(p3c, p3l, p3r));
      this.newsList.push(new NewsItem(p4c, p4l, p4r));
      this.newsList.push(new NewsItem(p5c, p5l, p5r));
      resolve();
    });
  }
}
