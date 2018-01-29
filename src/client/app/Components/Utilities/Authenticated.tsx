import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { isAuthenticated, getAuthUrl } from './AuthService';

export default function Authenticated(BaseComponent) {
    class AuthenticatedComponent extends React.Component<RouteComponentProps<any>, {}> {
        render() {
            if (isAuthenticated()) {
                return <BaseComponent {...this.props} />;
            } else {
                window.location.assign(getAuthUrl());
            }
        }
    }

    return AuthenticatedComponent;
}