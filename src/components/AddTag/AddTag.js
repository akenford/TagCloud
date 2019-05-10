// react
import React, { Component } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// router
import { Link } from 'react-router-dom'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'

// components
import Input from '../../components/system-components/Input/Input'

class AddTag extends Component {

    constructor(props) {
        super(props);
        this.state = { label:'',volume:'' }
    }

    submitForm = (e) => {
        e.preventDefault();

        let { addTag } = this.props.tagCloudActions;
        let { label, volume } = this.state;

        addTag({label:label,volume:parseInt(volume), sentimentScore:1000, id:`${Math.random()}__new-tag`});
    };

    handleInputChange = (name, value) => {
        this.setState({
             [name]: value
        });
    };

    render() {
        let { label, volume } = this.state;

        return (
            <form className={'add-form'} onSubmit={this.submitForm}>
                <Link to={'/'}>To home</Link>
                <Input
                    inputClass=''
                    required={true}
                    inputType='text'
                    inputName='label'
                    inputPlaceholder='Label'
                    inputValue={label}
                    inputOnChange={this.handleInputChange}
                />
                <Input
                    inputClass=''
                    required={true}
                    inputType='number'
                    inputName='volume'
                    inputPlaceholder='Volume'
                    inputValue={volume}
                    inputOnChange={this.handleInputChange}
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        TagCloud: state.TagCloud
    }
}
function mapDispatchToProps(dispatch) {
    return {
        tagCloudActions: bindActionCreators(tagCloudActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTag)