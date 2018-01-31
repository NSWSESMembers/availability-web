import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../StoreDefinitions';
import strings from '../../../Resources/Strings';

class ViewRequest extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        document.title = strings.viewRequest_pageTitle;
    }
    
    render() {
        return <div />
    }
}

export default connect(null, mapDispatchToProps)(ViewRequest);