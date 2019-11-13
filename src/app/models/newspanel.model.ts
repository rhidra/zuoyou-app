export class NewsPanel {
    title: string;
    content: string = '';
    image: string = '';
    fullImage: string = '';

    constructor(title: string, content: string = '', image: string = '', fullImage: string = '') {
        this.title = title;
        this.content = content;
        this.image = image;
        this.fullImage = fullImage;
    }
}
