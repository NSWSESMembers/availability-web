import * as React from 'react';
import * as moment from 'moment';
import { addDaysToDate } from '../../Utilities/DateTimeTools';

export default class WeekRangePicker extends React.Component<any, any> {
    _today;

    constructor(props) {
        super(props);
        this.state = {
            today: null,
            startDate: '',
            endDate: ''
        }
    }

    componentWillMount() {
        this._today = new Date();
        this.calculateWeekDays();
    }

    calculateWeekDays = () => {
        const { onChange } = this.props;
        const _todayMoment = moment(this._today.toDateString());
        const _day = _todayMoment.day();
        const _startDate = addDaysToDate(this._today, (_day - 1) * (-1));
        const _endDate = addDaysToDate(this._today, 7 - _day);

        this.setState({
            startDate: moment(_startDate.toDateString()).format("DD-MM"),
            endDate: moment(_endDate.toDateString()).format("DD-MM")
        });

        if (onChange) {
            onChange(moment(_startDate.toDateString()), moment(_endDate.toDateString()));
        }
    }

    handleLeftButtonClick() {
        this._today = addDaysToDate(this._today, -7);
        this.calculateWeekDays();
    }

    handleRightButtonClick() {
        this._today = addDaysToDate(this._today, 7);
        this.calculateWeekDays();
    }

    render() {
        return <div className={this.props.className + ' input-group'}>
            <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="fa fa-angle-left" onClick={this.handleLeftButtonClick.bind(this)} /></button>
            </span>
            <input className="form-control" readOnly
                style={{ backgroundColor: 'white', textAlign: 'center', height: 33 }}
                value={this.state.startDate + "  ==>  " + this.state.endDate} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="fa fa-angle-right" onClick={this.handleRightButtonClick.bind(this)} /></button>
            </span>
        </div>
    }
}