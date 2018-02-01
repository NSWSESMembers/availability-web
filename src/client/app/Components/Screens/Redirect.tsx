import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { stringIsNullOrEmpty } from '../Utilities/StringTools';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../StoreDefinitions';
import { setToken, getAuthUrl, getLogoutUrl } from '../Utilities/AuthService';

class Redirect extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        const { location } = this.props;
        if (!stringIsNullOrEmpty(location.hash)) {
            setToken(location.hash.substring(1));
            window.location.assign("/");
        } else {
            window.location.assign(getLogoutUrl());
        }
    }
    
    render() {
        return <div />
    }
}

export default connect(null, mapDispatchToProps)(Redirect);