import * as React from 'react';
import { RouteComponentProps, Link, BrowserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../StoreDefinitions';
import strings from '../../../Resources/Strings';
import { queryStringToValue } from '../../../Utilities/StringTools';
import RaisedButton from 'material-ui/RaisedButton';
import { getToday, getWeekDayDate, addDaysToMomentDate } from '../../../Utilities/DateTimeTools';
import DatetimeRangePicker from '../../../Widgets/DateTimeRangePicker/DatetimeRangePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as Constants from '../../../Configuration/Constants';
import TableRow from './TableRow';
import WeekRangePicker from '../../../Widgets/WeekRangePicker/Index';
import HeaderCell from './HeaderCell';

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

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadRequestDetails = () => {
        this.props.populateRequestDetails(this._key, this._startDate, this._endDate, this._capabilityCode);
    }

    newRequestButton_onClick() {
        this.props.setRoute("/requests/request-details", "?type=add");
    }

    handleDropDownChange = (event, index, value, item) => {
        switch (item) {
            case Constants.CAPABILITIES_DROPDOWN:
                this._capabilityCode = value;
                break;
        }
        this.loadRequestDetails();
    }

    handleWeekRangePickerChange = (startDate, endDate) => {
        this._key = queryStringToValue(this.props.location.search, "key");
        this._startDate = startDate;
        this._endDate = endDate;
        this.loadRequestDetails();
    }

    addNewPerson = () => { }

    generateHeaderCells = () => {
        const result = [];
        for (let i: number = 0; i <= this._endDate.diff(this._startDate, 'days'); i++) {
            result.push(<HeaderCell key={i} date={addDaysToMomentDate(this._startDate, i)} formattedDate={getWeekDayDate(this._startDate, i + 1)} />);
        }
        return result;
    }

    render() {
        const { details, people } = this.props.request.request;
        const { params } = this.props.request;
        const { history, enums } = this.props;
        let _people = [];

        if (this._capabilityCode !== -1 && people.length !== 0) {
            _people = people.filter((el) => {
                let result = false;
                Array.prototype.forEach.call(el.capabilities, (el2) => {
                    if (el2.key === this._capabilityCode) {
                        result = true;
                    }
                })
                return result;
            });
        } else {
            _people = people;
        }

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
                <div className='col-xs-12 col-sm-3'>
                    <WeekRangePicker period={14} className="pull-left alignWithWidget" onChange={(startDate, endDate) => this.handleWeekRangePickerChange(startDate, endDate)} />
                </div>
                <div className='col-xs-12 col-sm-9'>
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
                                {this.generateHeaderCells()}
                            </tr>
                        </thead>
                        <tbody>
                            {_people.map((el, index) => {
                                return <TableRow key={el.key} person={el} startDate={this._startDate} endDate={this._endDate} requestDetails={details} />
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