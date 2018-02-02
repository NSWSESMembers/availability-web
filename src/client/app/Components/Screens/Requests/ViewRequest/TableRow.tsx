import * as React from 'react';

const TableRow = (props) => {
    const { person, startDate, endDate } = props;
    const { availability } = person;
    
    return <tr>
        <td>{person.name}</td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
    </tr>
}

export default TableRow;