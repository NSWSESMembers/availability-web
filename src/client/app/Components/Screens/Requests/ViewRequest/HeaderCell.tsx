import * as React from 'react';
import { getWeekDayDate, getWeekDayName } from '../../../Utilities/DateTimeTools';

const HeaderCell = (props) => {
    return <td className="text-center">{getWeekDayName(props.date.day()) + " (" + props.formattedDate + ")"}</td>;
}

export default HeaderCell;