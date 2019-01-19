// react
import React, { Component } from "react"

class InputCheckbox extends Component {
    constructor() {
        super();
        this.state = {isChecked: false};
    }
    handleChange() {
        let { handleRemoveMode, removeMode } = this.props;
        handleRemoveMode(!removeMode);

        this.setState({isChecked: !this.state.isChecked});
    }
    render() {
        let { isChecked } = this.state;

        return (
            <div className="input-checkbox-cnt">
                <p>Remove Mode</p>
                <input
                    type="checkbox"
                    onChange={this.handleChange.bind(this)}
                    id="toggle_today_summary"
                    checked={isChecked}/>
                <div className="toggle">
                    <label htmlFor="toggle_today_summary">
                        <i></i>
                    </label>
                </div>
            </div>
        )
    }
}
export default InputCheckbox;