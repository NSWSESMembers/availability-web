import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import strings from '../../Resources/Strings';

export default class Dashboard extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        document.title = strings.dashboard_title;
    }
    
    render() {
        return <div />
    }
}