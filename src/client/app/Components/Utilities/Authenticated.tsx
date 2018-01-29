import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { getToken, getAuthUrl } from './AuthService';

export default function Authenticated(BaseComponent) {
    class AuthenticatedComponent extends React.Component<RouteComponentProps<any>, {}> {
        render() {
            if (getToken() !== null) {
                return <BaseComponent {...this.props} />;
            } else {
                window.location.assign(getAuthUrl());
            }
        }
    }

    return AuthenticatedComponent;
}