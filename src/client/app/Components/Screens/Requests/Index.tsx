import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import strings from '../../Resources/Strings';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../StoreDefinitions';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import DatetimeRangePicker from '../../Widgets/DateTimeRangePicker/DatetimeRangePicker';
import { getToday } from '../../Utilities/DateTimeTools';
import * as StoreDefinitions from '../../StoreDefinitions';
import * as Constants from '../../Configuration/Constants';

class Requests extends React.Component<RouteComponentProps<{}>, any> {
    _startDate = getToday();
    _endDate = getToday();
    _groupCode = -1;
    _capabilityCode = -1;
    _priorityCode = -1;

    componentWillMount() {
        document.title = strings.requests_pageTitle;
    }

    componentDidMount() {
        this.populateRequests();
    }

    handleDateRangeChange(event, picker) {
        this._startDate = picker.startDate;
        this._endDate = picker.endDate;
        this.populateRequests();
    }

    handleDropDownChange = (event, index, value, item) => {
        switch (item) {
            case Constants.GROUPS_DROPDOWN:
                this._groupCode = value;
                break;

            case Constants.CAPABILITIES_DROPDOWN:
                this._capabilityCode = value;
                break;

            case Constants.PRIORITY_DROPDOWN:
                this._priorityCode = value;
                break;
        }
        this.populateRequests();
    }

    populateRequests = () => {
        this.props.populateRequests(this._startDate, this._endDate, this._groupCode, this._capabilityCode, this._priorityCode);
    }

    newRequestButton_onClick() {
        this.props.setRoute("/requests/request-details", "?type=add");
    }

    render() {
        const { requests, enums } = this.props;

        return <div className='container-fluid content'>
            <div className='row'>
                <div className='col-xs-6'>
                    <h3><strong>{strings.requests_title}</strong></h3>
                </div>
                <div className="col-xs-6 text-right">
                    <RaisedButton label={strings.requests_button_newRequest} primary={true} className="actionButton" onClick={this.newRequestButton_onClick.bind(this)} />
                </div>
            </div>
            <div className="row">
                <div className='col-xs-12 col-sm-2'>
                    <DatetimeRangePicker className="pull-left alignWithWidget"
                        startDate={requests.params.startDate}
                        endDate={requests.params.endDate}
                        onApply={this.handleDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{requests.params.dateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker>
                </div>
                <div className='col-xs-12 col-sm-10'>
                    <DropDownMenu value={requests.params.groupCode} onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.GROUPS_DROPDOWN)} className="pull-left">
                        {enums.groups.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                    <DropDownMenu value={requests.params.capabilityCode} onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.CAPABILITIES_DROPDOWN)} className="pull-left">
                        {enums.capabilities.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                    <DropDownMenu value={requests.params.priorityCode} onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.PRIORITY_DROPDOWN)} className="pull-left">
                        {enums.priorities.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className='col-xs-12'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>{strings.requests_tableHeader_name}</TableHeaderColumn>
                                <TableHeaderColumn>{strings.requests_tableHeader_group}</TableHeaderColumn>
                                <TableHeaderColumn>{strings.requests_tableHeader_capability}</TableHeaderColumn>
                                <TableHeaderColumn>{strings.requests_tableHeader_priority}</TableHeaderColumn>
                                <TableHeaderColumn>{strings.requests_tableHeader_startDate}</TableHeaderColumn>
                                <TableHeaderColumn>{strings.requests_tableHeader_endDate}</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.requests.map((el, index) => {
                                const { details } = el;
                                return <TableRow key={details.key}>
                                    <TableHeaderColumn><Link to={{
                                        pathname: '/requests/view-request',
                                        search: '?key=' + details.key
                                    }}>{details.name}</Link></TableHeaderColumn>
                                    <TableHeaderColumn>{details.groupTitle}</TableHeaderColumn>
                                    <TableHeaderColumn>{details.capabilityTitle}</TableHeaderColumn>
                                    <TableHeaderColumn>{details.priorityTitle}</TableHeaderColumn>
                                    <TableHeaderColumn>{details.startDate}</TableHeaderColumn>
                                    <TableHeaderColumn>{details.endDate}</TableHeaderColumn>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        requests: state.requests,
        enums: state.enums
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);