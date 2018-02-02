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
import TableRow from './TableRow';
import WeekRangePicker from '../../../Widgets/WeekRangePicker/Index';

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

    addNewPerson = () => {

    }

    render() {
        const { details, people } = this.props.request.request;
        const { params } = this.props.request;
        const { history, enums } = this.props;

        return <div className='container-fluid content'>
            <div className='row'>
                <div className='col-xs-6'>
                    <h3><strong><Link to="/requests">{strings.requests_title}</Link> > {details !== undefined ? details.name : ""}</strong></h3>
                </div>
                <div className="col-xs-6 text-right">
                    <RaisedButton label={strings.requests_button_newRequest} primary={true} className="actionButton" onClick={this.newRequestButton_onClick.bind(this)} />
                </div>
            </div>
            <div className="row">
                <div className='col-xs-12 col-sm-2'>
                    <WeekRangePicker className="pull-left alignWithWidget" />
                    {/* <DatetimeRangePicker className="pull-left alignWithWidget"
                        startDate={params.startDate}
                        endDate={params.endDate}
                        onApply={this.handleDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{params.dateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker> */}
                </div>
                <div className='col-xs-12 col-sm-10'>
                    <DropDownMenu value={params.capabilityCode} onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.CAPABILITIES_DROPDOWN)} className="pull-left">
                        {enums.capabilities.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-xs-12'>
                    <table className='table table-bordered borderedTable'>
                        <thead>
                            <tr>
                                <td><a href='javascript:void(0);' onClick={() => this.addNewPerson()}><i className="fa fa-plus-circle" /> {strings.viewRequest_link_addNewPerson}</a></td>
                                <td className="text-center">{strings.general_weekday_monday}</td>
                                <td className="text-center">{strings.general_weekday_tuesday}</td>
                                <td className="text-center">{strings.general_weekday_wednesday}</td>
                                <td className="text-center">{strings.general_weekday_thursday}</td>
                                <td className="text-center">{strings.general_weekday_friday}</td>
                                <td className="text-center">{strings.general_weekday_saturday}</td>
                                <td className="text-center">{strings.general_weekday_sunday}</td>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((el, index) => {
                                return <TableRow key={el.key} person={el} startDate={this._startDate} endDate={this._endDate} />
                            })}
                        </tbody>
                    </table>
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