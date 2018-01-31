import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../StoreDefinitions';
import strings from '../../../Resources/Strings';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { queryStringToValue, stringIsNullOrEmpty } from '../../../Utilities/StringTools';
import * as Constants from '../../../Configuration/Constants';
import * as StoreDefinitions from '../../../StoreDefinitions';
import TitleColumn from './TitleColumn';
import ValueColumn from './ValueColumn';
import Row from './Row';
import RadioButtonGroup from '../../../Widgets/RadioButtonGroup/RadioButtonGroup';
import RadioButton from '../../../Widgets/RadioButtonGroup/RadioButton';
import CheckBox from '../../../Widgets/CheckBox/CheckBox';
import DatetimeRangePicker from '../../../Widgets/DateTimeRangePicker/DatetimeRangePicker';
import { getToday, formatDateForView } from '../../../Utilities/DateTimeTools';
import * as GlobalConfig from '../../../Configuration/GlobalConfig';
import RaisedButton from 'material-ui/RaisedButton';

class RequestDetails extends React.Component<RouteComponentProps<{}>, any> {
    _isMounted = true;

    constructor(props) {
        super(props);
        this.state = {
            groupCode: -1,
            hqCode: -1,
            priorityCode: -1,
            requestTypeCode: 1,
            capabilities: [],
            startDate: getToday(),
            endDate: getToday(),
            startDateText: formatDateForView(getToday()),
            endDateText: formatDateForView(getToday())
        }
    }

    componentWillMount() {
        this._isMounted = true;
        const _type = queryStringToValue(this.props.location.search, "type");
        document.title = (stringIsNullOrEmpty(_type) || _type === "add" ? strings.requestDetails_add_pageTitle : strings.requestDetails_edit_pageTitle);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleDropDownChange = (event, index, value, item) => {
        switch (item) {
            case Constants.GROUPS_DROPDOWN:
                this.setState({ groupCode: value });
                break;
            case Constants.HQ_DROPDOWN:
                this.setState({ hqCode: value });
                break;
        }
    }

    handleRadioButtonGroupChange = (item, value) => {
        switch (item) {
            case Constants.PRIORITY_DROPDOWN:
                this.setState({ priorityCode: value });
                break;
        }
    }

    handleCheckBoxChange = (item, checked) => {
        const { capabilities } = this.state;
        if (checked) {
            capabilities.push(item);
        } else {
            capabilities.splice(capabilities.indexOf(item), 1);
        }
        this.setState({ capabilities });
    }

    handleStartDateRangeChange(event, picker) {
        this.setState({
            startDate: picker.startDate,
            startDateText: formatDateForView(picker.startDate)
        })
    }

    handleEndDateRangeChange(event, picker) {
        this.setState({
            endDate: picker.startDate,
            endDateText: formatDateForView(picker.endDate)
        })
    }

    render() {
        const { enums } = this.props;
        const dropDownStyle = {
            marginLeft: -24
        };

        return <div className="container-fluid content">
            <div className='row'>
                <div className='col-xs-12'>
                    <h3><strong>{strings.requestDetails_add_title}</strong></h3>
                </div>
            </div>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_name} />
                <ValueColumn>
                    <TextField hintText={strings.requestDetails_hint_name} fullWidth={true} />
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_details} />
                <ValueColumn>
                    <TextField hintText={strings.requestDetails_hint_details} multiLine={true} rows={4} rowsMax={4} fullWidth={true} />
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_group} />
                <ValueColumn>
                    <DropDownMenu value={this.state.groupCode}
                        onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.GROUPS_DROPDOWN)}
                        className="pull-left" style={dropDownStyle}>
                        {enums.groups.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_hq} />
                <ValueColumn>
                    <DropDownMenu value={this.state.hqCode}
                        onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.HQ_DROPDOWN)}
                        className="pull-left" style={dropDownStyle}>
                        {enums.hqs.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_priority} />
                <ValueColumn>
                    <RadioButtonGroup name='priority' onValueChanged={(value) => this.handleRadioButtonGroupChange(Constants.PRIORITY_DROPDOWN, value)}>
                        {enums.priorities.slice(1, enums.priorities.length).map((el, index) => {
                            return <RadioButton key={el.key} value={el.key} label={el.value} />
                        })}
                    </RadioButtonGroup>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_type} />
                <ValueColumn>
                    <DropDownMenu value={this.state.requestTypeCode}
                        onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.REQUEST_TYPES_DROPDOWN)}
                        className="pull-left" style={dropDownStyle}>
                        {enums.requestTypes.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_capability} />
                <ValueColumn>
                    {enums.capabilities.slice(1, enums.capabilities.length).map((el, index) => {
                        return <CheckBox key={el.key} name={el.key} label={el.value} onChange={(checked) => this.handleCheckBoxChange(el, checked)} />
                    })}
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_startDate} />
                <ValueColumn>
                    <DatetimeRangePicker
                        className='alignWithWidget'
                        singleDatePicker
                        showDropdowns
                        locale={GlobalConfig.DATE_LOCALE}
                        startDate={this.state.startDate}
                        onEvent={this.handleStartDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{this.state.startDateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <Row>
                <TitleColumn title={strings.requestDetails_label_endDate} />
                <ValueColumn>
                    <DatetimeRangePicker
                        className='alignWithWidget'
                        singleDatePicker
                        showDropdowns
                        locale={GlobalConfig.DATE_LOCALE}
                        startDate={this.state.endDate}
                        onEvent={this.handleEndDateRangeChange.bind(this)} >
                        <button className="btn btn-default">
                            <i className="fa fa-calendar" /> &nbsp;<span>{this.state.endDateText}</span>&nbsp;&nbsp;
                            <i className="fa fa-angle-down" />
                        </button>
                    </DatetimeRangePicker>
                </ValueColumn>
                <div className="col-sm-4" />
            </Row>
            <br />
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-xs-8 text-center'>
                    <RaisedButton label={strings.requestDetails_button_submit} primary={true} onClick={() => {  }} />
                </div>
                <div className='col-xs-4' />
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        enums: state.enums
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);