export class NewsItem {
    id: string = '';
    title: string;
    content: string = '';
    image: string = '';
    fullImage: string = '';

    constructor(title: string, content: string = '', image: string = '', fullImage: string = '', id: string = makeid(10)) {
        this.title = title;
        this.content = content;
        this.id = id;
        this.image = image;
        this.fullImage = fullImage;
    }
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
