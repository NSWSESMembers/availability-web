import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../StoreDefinitions';

class EditRequest extends React.Component<RouteComponentProps<{}>, any> {
    render() {
        return <div />
    }
}

export default connect(null, mapDispatchToProps)(EditRequest);