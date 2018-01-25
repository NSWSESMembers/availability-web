import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Index';

class Layout extends React.Component {
    render() {
        return <div>
            <Header />
            {this.props.children}
        </div>
    }
}

export default withRouter(Layout);