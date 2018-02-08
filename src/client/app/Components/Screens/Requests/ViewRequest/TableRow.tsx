import * as React from 'react';
import { addDaysToDate } from '../../../Utilities/DateTimeTools';
import CellContent from './CellContent';
import ReactTooltip from 'react-tooltip'

export default class TableRow extends React.Component<any, any> {
    isInRange = (date: Date) => {
        const { requestDetails } = this.props;
        
        const requestStartDate = new Date(requestDetails.startDate);
        const requestEndDate = new Date(requestDetails.endDate);
        if (date >= requestStartDate && date <= requestEndDate) {
            return true;
        } else {
            return false;
        }
    }
    
    generateCells = () => {
        const { person, startDate, endDate } = this.props;
        const { availability } = person;

        const rowHeight = 48;
        const crossImage = require("../../../Resources/Images/cross.png");

        const result = [];
        for (let i: number = 0; i <= endDate.diff(startDate, 'days'); i++) {
            result.push(<td key={i} className="text-center imageFill" style={{ height: rowHeight }}>{this.isInRange(addDaysToDate(startDate.toDate(), i)) ? <CellContent date={addDaysToDate(startDate.toDate(), i)} availability={availability} /> : <img src={crossImage} />}</td>);
        }
        return result;
    }
    
    render() {
        const { person } = this.props;
        
        return <tr>
            <td style={{ verticalAlign: 'middle' }}>{person.name} <i className="fa fa-info-circle"
                onMouseEnter={() => { ReactTooltip.show(this.refs.capabilitiesTip) }}
                onMouseLeave={() => { ReactTooltip.hide(this.refs.capabilitiesTip) }} />
                <ReactTooltip />
                <p ref='capabilitiesTip' style={{ display: "inline-block" }} data-tip={person.capabilities.map((el) => {
                    return el.value;
                })}></p>
            </td>
            {this.generateCells()}
        </tr>
    }
}