import { Injectable } from '@angular/core';
import {NewsItem} from '../../models/newsitem.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  newsList: Array<NewsItem> = [];

  constructor() { }

  load() {
    return new Promise(resolve => {
      this.newsList.push(new NewsItem('Interesting story !!', 'Yes it is interesting !', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat, ' +
            'tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum ' +
            'cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula. ' +
            'Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui. ' +
            'Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis ' +
            'iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa. ' +
            'Etiam convallis hendrerit rhoncus. Donec bibendum vestibulum nulla vitae volutpat. Ut et ornare arcu. ' +
            'Ut vel tellus id libero convallis rhoncus a pellentesque turpis. Fusce et tincidunt nisl. Nunc tempus efficitur enim. ' +
            'Duis ac orci sed ante posuere placerat. Nulla felis est, vehicula sit amet lacinia tristique, facilisis vitae lorem.'));
      this.newsList.push(new NewsItem('Another Interesting story !!', 'It is even more interesting !', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat, ' +
            'tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum ' +
            'cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula. ' +
            'Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui. ' +
            'Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis ' +
            'iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa. ' +
            'Etiam convallis hendrerit rhoncus. Donec bibendum vestibulum nulla vitae volutpat. Ut et ornare arcu. ' +
            'Ut vel tellus id libero convallis rhoncus a pellentesque turpis. Fusce et tincidunt nisl. Nunc tempus efficitur enim. ' +
            'Duis ac orci sed ante posuere placerat. Nulla felis est, vehicula sit amet lacinia tristique, facilisis vitae lorem.'));
      this.newsList.push(new NewsItem('Something boring', ':( ...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat, ' +
            'tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum ' +
            'cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula. ' +
            'Aliquam libero tellus, vulputate ut dui vitae, laoreet dignissim dui. ' +
            'Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis ' +
            'iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa. ' +
            'Etiam convallis hendrerit rhoncus. Donec bibendum vestibulum nulla vitae volutpat. Ut et ornare arcu. '));
      this.newsList.push(new NewsItem('Super true story !', 'Wow what a story !', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris erat, ' +
            'tempor consectetur efficitur at, vulputate pretium orci. Quisque ut sem eu urna elementum ' +
            'cursus eu nec dui. Maecenas sollicitudin porta massa nec vehicula. ' +
            'Nunc est eros, gravida vitae malesuada eu, varius venenatis metus. Vestibulum ac massa non metus sagittis ' +
            'iaculis. Vestibulum porta, mi vel aliquet aliquam, dui lectus sagittis orci, non euismod ex dui id massa. ' +
            'Etiam convallis hendrerit rhoncus. Donec bibendum vestibulum nulla vitae volutpat. Ut et ornare arcu. '));
      resolve();
    });
  }
}
