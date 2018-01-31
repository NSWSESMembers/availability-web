import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Header from '../Header/Index';
import { isAuthenticated } from '../../Utilities/AuthService';
import { connect } from 'react-redux';
import * as StoreDefinitions from '../../StoreDefinitions';

class Layout extends React.Component<RouteComponentProps<{}>, any> {
    componentDidMount() {
        if (isAuthenticated()) {
            this.props.updateUserDetails();
            this.props.populateList(StoreDefinitions.LIST_TYPE_GROUPS);
            this.props.populateList(StoreDefinitions.LIST_TYPE_CAPABILITIES);
            this.props.populateList(StoreDefinitions.LIST_TYPE_PRIORITIES);
            this.props.populateList(StoreDefinitions.LIST_TYPE_HQS);
            this.props.populateList(StoreDefinitions.LIST_TYPE_REQUEST_TYPES);
        }
    }

    render() {
        return <div>
            {isAuthenticated() ? <Header {...this.props} /> : <div />}
            {this.props.children}
        </div>
    }
}

export default connect(null, StoreDefinitions.mapDispatchToProps)(withRouter(Layout));