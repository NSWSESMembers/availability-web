import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Header from '../Header/Index';
import { isAuthenticated } from '../../Utilities/AuthService';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../StoreDefinitions';

class Layout extends React.Component<RouteComponentProps<{}>, any> {
    componentDidMount() {
        if (isAuthenticated()) {
            this.props.updateUserDetails();
        }
    }
    
    render() {
        return <div>
            {isAuthenticated() ? <Header {...this.props} /> : <div />}
            {this.props.children}
        </div>
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Layout));