// lodash/map
import { map } from 'lodash';

class Tag {
    constructor({ burst = 0, days =[], id = 0, label = 'Tag', pageType = {}, queries = [], sentiment = {}, sentimentScore = 0, type = 'topic', volume = 0}) {
        this.burst = burst;
        this.days = days;
        this.id = id;
        this.label = label;
        this.pageType = pageType;
        this.queries = queries;
        this.sentiment = sentiment;
        this.sentimentScore = sentimentScore;
        this.type = type;
        this.volume = volume;
    }
    get getLabel() {
        return this.label;
    }
    get getSentiment() {
        return this.sentiment;
    }
    get getPageType() {
        return this.pageType;
    }
    get getTopMention() {
        let sum = 0;

        _.map(this.sentiment, (qty) => sum += qty);

        return sum;
    }
}

export default Tag;