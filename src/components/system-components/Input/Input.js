// react
import React, { PureComponent, Fragment } from "react"

class Input extends PureComponent {
    constructor() {
        super();
        this.state = {
            value:''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(e) {
        let { inputOnChange } = this.props;

        this.setState({
            value:e.target.value
        })

        inputOnChange(e.target.value);
    }

    handleReset() {
        let { inputOnChange } = this.props;

        this.setState({
            value:''
        })

        inputOnChange('');
    }

    renderRemoveIcon() {
        return <svg onClick={this.handleReset} className="remove-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939">
                    <path d="M62.819 47.97l32.533-32.534a2 2 0 0 0 0-2.828L83.333.586a2.002 2.002 0 0 0-2.828 0L47.97 33.121 15.435.586c-.75-.75-2.078-.75-2.828 0L.587 12.608a2 2 0 0 0 0 2.828L33.121 47.97.587 80.504a2 2 0 0 0 0 2.828l12.02 12.021a2 2 0 0 0 2.828 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.828 0l12.02-12.021a2 2 0 0 0 0-2.828L62.819 47.97z" fill="#FFF"/>
                </svg>
    }

    render() {
        let { inputClass, inputType, inputPlaceholder } = this.props;
        let { value } = this.state;

        return (
            <Fragment>
                {value.length ? this.renderRemoveIcon() : null}
                <input
                    className={inputClass}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    onChange={this.handleChange}
                    value={value}/>
            </Fragment>
        )
    }
}
export default Input;