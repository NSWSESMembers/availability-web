import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { clearToken } from '../Utilities/AuthService';

export default class Logout extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        clearToken();
        window.location.assign("/");
    }

    render() {
        return <div />
    }
}