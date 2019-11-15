import {NewsPanel} from './newspanel.model';

export class NewsItem {
    id: string = '';
    panels: Array<NewsPanel> = [];

    constructor(panelCenter: NewsPanel, panelLeft: NewsPanel = null, panelRight: NewsPanel = null, id: string = makeid(10)) {
        if (panelLeft) {
            this.panels.push(panelLeft);
        }
        this.panels.push(panelCenter);
        if (panelRight) {
            this.panels.push(panelRight);
        }
        this.id = id;
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
