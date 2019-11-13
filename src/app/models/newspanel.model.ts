export class NewsPanel {
    title: string;
    content: string = '';
    image: string = '';
    fullImage: string = '';
    video: string = '';

    constructor(title: string, content: string = '', image: string = '', fullImage: string = '', video: string = '') {
        this.title = title;
        this.content = content;
        this.image = image;
        this.fullImage = fullImage;
        this.video = video;
    }
}
