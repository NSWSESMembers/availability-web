import * as React from 'react';
import { RouteComponentProps, Link, BrowserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../StoreDefinitions';
import strings from '../../../Resources/Strings';
import { queryStringToValue } from '../../../Utilities/StringTools';
import RaisedButton from 'material-ui/RaisedButton';
import { getToday } from '../../../Utilities/DateTimeTools';
import DatetimeRangePicker from '../../../Widgets/DateTimeRangePicker/DatetimeRangePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as Constants from '../../../Configuration/Constants';

class ViewRequest extends React.Component<RouteComponentProps<{}>, any> {
    _isMounted = true;
    _key = "";
    _startDate = getToday();
    _endDate = getToday();
    _groupCode = -1;
    _capabilityCode = -1;

    componentWillMount() {
        this._isMounted = true;
        document.title = strings.viewRequest_pageTitle;
    }

    componentDidMount() {
        this._key = queryStringToValue(this.props.location.search, "key");
        this.loadRequestDetails();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadRequestDetails = () => {
        this.props.populateRequestDetails(this._key, this._startDate, this._endDate, this._capabilityCode);
    }

    newRequestButton_onClick() {
        this.props.setRoute("/requests/request-details", "?type=add");
    }

    handleDateRangeChange(event, picker) {
        this._startDate = picker.startDate;
        this._endDate = picker.endDate;
        this.loadRequestDetails();
    }

    handleDropDownChange = (event, index, value, item) => {
        switch (item) {
            case Constants.CAPABILITIES_DROPDOWN:
                this._capabilityCode = value;
                break;
        }
        this.loadRequestDetails();
    }

    render() {
        const { details, people } = this.props.request.request;
        const { params } = this.props.request;
        const { history, enums } = this.props;

        return <div className='container-fluid content'>
            <div className='row'>
                <div className='col-xs-6'>
                    <h3><strong><a href="javascript:void(0);" onClick={() => history.goBack()} >{strings.requests_title}</a> > {details !== undefined ? details.name : ""}</strong></h3>
                </div>
                <div className="col-xs-6 text-right">
                    <RaisedButton label={strings.requests_button_newRequest} primary={true} className="actionButton" onClick={this.newRequestButton_onClick.bind(this)} />
                </div>
            </div>
            <div className="row">
                <div className='col-xs-12 col-sm-2'>
                    <DatetimeRangePicker className="pull-left alignWithWidget"
                        startDate={params.startDate}
                        endDate={params.endDate}
                        onApply={this.handleDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{params.dateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker>
                </div>
                <div className='col-xs-12 col-sm-10'>
                    <DropDownMenu value={params.capabilityCode} onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.CAPABILITIES_DROPDOWN)} className="pull-left">
                        {enums.capabilities.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        request: state.request,
        enums: state.enums
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRequest);