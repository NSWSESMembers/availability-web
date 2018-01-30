import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import strings from '../../Resources/Strings';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../StoreDefinitions';
import RaisedButton from 'material-ui/RaisedButton';
import DatetimeRangePicker from '../../Widgets/DateTimeRangePicker';
import { getMomentDateObject } from '../../Utilities/DateTimeTools';

class Requests extends React.Component<RouteComponentProps<{}>, any> {
    componentWillMount() {
        document.title = strings.requests_pageTitle;
        const today = getMomentDateObject(new Date());
        this.props.populateRequests(today, today);
    }

    handleDateRangeChange(event, picker) {
        this.props.populateRequests(picker.startDate, picker.endDate);
    }

    render() {
        const { requests } = this.props;

        return <div className='container-fluid content'>
            <div className='row'>
                <div className='col-xs-6'>
                    <h3><strong>{strings.requests_title}</strong></h3>
                </div>
                <div className="col-xs-6 text-right">
                    <RaisedButton label={strings.request_button_newRequest} primary={true} className="actionButton" />
                </div>
            </div>
            <div className="row">
                <div className='col-xs-12'>
                    <DatetimeRangePicker
                        startDate={requests.params.startDate}
                        endDate={requests.params.endDate}
                        onApply={this.handleDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{requests.params.dateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        requests: state.requests
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);