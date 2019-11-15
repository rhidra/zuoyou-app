export class NewsHome {
    content: string = '';
    image: string = '';

    constructor(content: string, image: string = '') {
        this.content = content;
        this.image = image;
    }
}
