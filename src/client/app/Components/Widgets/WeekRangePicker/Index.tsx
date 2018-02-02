import * as React from 'react';
import * as moment from 'moment';

export default class WeekRangePicker extends React.Component<any, any> {
    constructor(props) {
        super(props);
        const _today = moment((new Date()).toDateString());
        this.state = {
            today: _today,
            startDate: _today,
            endDate: _today
        }
    }

    componentWillMount() {
        this.calculateWeekDays();
    }

    calculateWeekDays = () => {
        this.setState({ 
            startDate: this.state.today.add((this.state.today.day() - 1) * (-1), 'days'),
            endDate: this.state.today.add(7 - this.state.today.day(), 'days')
        });
    }

    handleRightButton = () => {

    }

    handleLeftButton = () => {

    }

    render() {
        return <div className={this.props.className + ' input-group'}>
            <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="fa fa-angle-left" onClick={() => this.handleLeftButton} /></button>
            </span>
            <input className="form-control" readOnly style={{ backgroundColor: 'white', textAlign: 'center' }} value={this.state.startDate.format("DD-MM") + "  -->  " + this.state.endDate.format("DD-MM")} />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="fa fa-angle-right" onClick={() => this.handleRightButton} /></button>
            </span>
        </div>
    }
}