export class NewsItem {
    id: string = '';
    title: string;
    subtitle: string;
    content: string = '';
    image: string = '';

    constructor(title: string, subtitle: string = '', content: string = '', id: string = makeid(10)) {
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.id = id;
        this.image = '';
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
