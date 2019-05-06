class Tag {
    constructor(props) {
        this.burst = props.burst;
        this.days = props.days;
        this.id = props.id;
        this.label = props.label;
        this.pageType = props.pageType;
        this.queries = props.queries;
        this.sentiment = props.sentiment;
        this.sentimentScore = props.sentimentScore;
        this.type = props.type;
        this.volume = props.volume;
    }
    get getLabel() {
        return this.label;
    }
}

export default Tag;