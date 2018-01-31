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

class RequestDetails extends React.Component<RouteComponentProps<{}>, any> {
    _isMounted = true;

    constructor(props) {
        super(props);
        this.state = {
            groupCode: -1,
            hqCode: -1,
            priorityCode: -1,
            requestTypeCode: 1
        }
    }

    componentWillMount() {
        this._isMounted = true;
        const _type = queryStringToValue(this.props.location.search, "type");
        document.title = (stringIsNullOrEmpty(_type) || _type === "add" ? strings.requestDetails_add_pageTitle : strings.requestDetails_edit_pageTitle);
        this.props.populateList(StoreDefinitions.LIST_TYPE_GROUPS);
        this.props.populateList(StoreDefinitions.LIST_TYPE_HQS);
        this.props.populateList(StoreDefinitions.LIST_TYPE_PRIORITIES);
        this.props.populateList(StoreDefinitions.LIST_TYPE_REQUEST_TYPES);
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
            case Constants.PRIORITY_DROPDOWN:
                this.setState({ priorityCode: value });
                break;
        }
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
                    <DropDownMenu value={this.state.priorityCode}
                        onChange={(event, index, value) => this.handleDropDownChange(event, index, value, Constants.PRIORITY_DROPDOWN)}
                        className="pull-left" style={dropDownStyle}>
                        {enums.priorities.map((el, index) => {
                            return <MenuItem key={el.key} value={el.key} primaryText={el.value} />
                        })}
                    </DropDownMenu>
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
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        enums: state.enums
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails);