import * as React from 'react';
import { addDaysToDate } from '../../../Utilities/DateTimeTools';
import CellContent from './CellContent';

const TableRow = (props) => {
    const { person, startDate, endDate, requestDetails } = props;
    const { availability } = person;
    const crossImage = require("../../../Resources/Images/cross.png");

    const dayDate_1: Date = startDate.toDate();
    const dayDate_2 = addDaysToDate(startDate.toDate(), 1);
    const dayDate_3 = addDaysToDate(startDate.toDate(), 2);
    const dayDate_4 = addDaysToDate(startDate.toDate(), 3);
    const dayDate_5 = addDaysToDate(startDate.toDate(), 4);
    const dayDate_6 = addDaysToDate(startDate.toDate(), 5);
    const dayDate_7 = addDaysToDate(startDate.toDate(), 6);

    const isInRange = (date: Date) => {
        
        const requestStartDate = new Date(requestDetails.startDate);
        const requestEndDate = new Date(requestDetails.endDate);
        if (date >= requestStartDate && date <= requestEndDate) {
            return true;
        } else {
            return false;
        }
    }

    const rowHeight = 48;
    
    return <tr>
        <td>{person.name}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_1) ? <CellContent date={dayDate_1} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_2) ? <CellContent date={dayDate_2} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_3) ? <CellContent date={dayDate_3} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_4) ? <CellContent date={dayDate_4} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_5) ? <CellContent date={dayDate_5} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_6) ? <CellContent date={dayDate_6} availability={availability} /> : <img src={crossImage} />}</td>
        <td className="text-center imageFill" style={{ height: rowHeight }}>{isInRange(dayDate_7) ? <CellContent date={dayDate_7} availability={availability} /> : <img src={crossImage} />}</td>
    </tr>
}

export default TableRow;