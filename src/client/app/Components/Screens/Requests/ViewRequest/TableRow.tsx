import * as React from 'react';
import { addDaysToDate } from '../../../Utilities/DateTimeTools';

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
    
    return <tr>
        <td>{person.name}</td>
        <td className="text-center imageFill">{isInRange(dayDate_1) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_2) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_3) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_4) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_5) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_6) ? "" : <img src={crossImage} />}</td>
        <td className="text-center imageFill">{isInRange(dayDate_7) ? "" : <img src={crossImage} />}</td>
    </tr>
}

export default TableRow;