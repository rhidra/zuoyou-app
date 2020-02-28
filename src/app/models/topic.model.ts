export class Topic {
    _id: string;
    title: string;

    author: string;
    video: string;
    hashtag: string;
    approved: boolean;
    date: string;

    leftPanel: TopicPanel;
    rightPanel: TopicPanel;

    get centerPanel(): TopicPanel {
        return {video: this.video, text: null, image: null, quiz: null};
    }
}

export class TopicPanel {
    video: string;
    text: string;
    image: string;
    quiz: string;
}
