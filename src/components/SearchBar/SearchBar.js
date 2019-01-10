// react
import React, { PureComponent } from "react"


class SearchBar extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            value:''
        }
    }

    handleChange(e) {
        this.setState({
            value:e.target.value
        })
    };

    render() {
        return (
            <form className="search-bar">
                <input
                    className="search-bar--search"
                    type="text"
                    placeholder="Search tags"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.value}/>
            </form>
        )
    }
}

export default SearchBar;