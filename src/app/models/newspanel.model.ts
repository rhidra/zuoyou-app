export class NewsPanel {
    title: string;
    content: string = '';
    image: string = '';
    fullImage: string = '';
    video: string = '';
    fullVideo: string = '';

    constructor(title: string, content: string = '', image: string = '', fullImage: string = '', video: string = '', fullVideo: string = '') {
        this.title = title;
        this.content = content;
        this.image = image;
        this.fullImage = fullImage;
        this.video = video;
        this.fullVideo = fullVideo;
    }
}
