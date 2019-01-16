// react
import React, { Component } from "react"

class InputCheckbox extends Component {
    constructor() {
        super();
        this.state = {isChecked: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let { handleRemoveMode, editMode } = this.props;
        handleRemoveMode(!editMode);

        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        let { isChecked } = this.state;

        return (
            <div className="input-checkbox-cnt">
                <p>Remove Mode</p>
                <input
                    /*className={'hello'}*/
                    type="checkbox"
                    onChange={this.handleChange}
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