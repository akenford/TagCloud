// react
import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// router
import { withRouter } from 'react-router-dom'

// actions
import * as apiActions from '../../actions/api-actions'

class Layout extends Component {

    componentDidMount() {
        let { getTags } = this.props.apiActions;
        getTags();
    }

    render() {
        let { children } = this.props;
        return (
            <CSSTransition in={true} appear={true} timeout={700} classNames="fade">
                <div className="layout">
                    {children}
                </div>
            </CSSTransition>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout))