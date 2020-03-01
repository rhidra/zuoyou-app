import {User} from './user.model';

export class Topic {
    _id: string;
    title: string;

    hashtag: string;
    approved: boolean;
    date: string;

    centerPanel: Topic;
    leftPanel: TopicPanel;
    rightPanel: TopicPanel;
}

export class TopicPanel {
    video: string;
    text: string;
    image: string;
    quiz: string;
    author: User;
}
