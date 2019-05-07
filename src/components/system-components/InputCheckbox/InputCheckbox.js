// react
import React, { Component } from 'react'

class InputCheckbox extends Component {

    handleChange = () => {
        let { handleRemoveMode, removeMode } = this.props;
        handleRemoveMode(!removeMode);
    };

    render() {
        let { removeMode } = this.props;

        return (
            <div className='input-checkbox-cnt'>
                <p>R Mode</p>
                <input
                    type='checkbox'
                    onChange={this.handleChange}
                    id='toggle_today_summary'
                    checked={removeMode}/>
                <div className='toggle'>
                    <label htmlFor='toggle_today_summary'>
                        <i></i>
                    </label>
                </div>
            </div>
        )
    }
}
export default InputCheckbox;