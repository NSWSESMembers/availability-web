import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import strings from '../../Resources/Strings';

export default class Requests extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        document.title = strings.requests_title;
    }
    
    render() {
        return <div>
            
        </div>
    }
}