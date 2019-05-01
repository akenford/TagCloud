// react
import React, { Component, Fragment } from "react"

class Input extends Component {

    handleChange = (e) => {
        let { inputOnChange } = this.props;
        inputOnChange(e.target.value);
    };

    handleReset = () => {
        let { inputOnChange } = this.props;
        inputOnChange('');
    };

    renderRemoveIcon = () => {
        let { inputValue } = this.props;

        if(inputValue.length) {
            return <svg onClick={this.handleReset} className="remove-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939">
                <path d="M62.819 47.97l32.533-32.534a2 2 0 0 0 0-2.828L83.333.586a2.002 2.002 0 0 0-2.828 0L47.97 33.121 15.435.586c-.75-.75-2.078-.75-2.828 0L.587 12.608a2 2 0 0 0 0 2.828L33.121 47.97.587 80.504a2 2 0 0 0 0 2.828l12.02 12.021a2 2 0 0 0 2.828 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.828 0l12.02-12.021a2 2 0 0 0 0-2.828L62.819 47.97z" fill="#FFF"/>
            </svg>
        }

        return null;
    };

    render() {
        let { inputClass, inputType, inputPlaceholder, inputValue } = this.props;

        return (
            <Fragment>
                {this.renderRemoveIcon()}
                <input
                    className={inputClass}
                    autoFocus={true}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    onChange={this.handleChange}
                    value={inputValue}/>
            </Fragment>
        )
    }
}
export default Input;