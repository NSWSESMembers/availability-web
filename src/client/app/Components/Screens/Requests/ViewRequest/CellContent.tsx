import * as React from 'react';
import { compareDay } from '../../../Utilities/DateTimeTools';
import uuidv4 from 'uuid/v4';

const CellContent = (props) => {
    const { date, availability } = props;
    const _availability = availability.filter((el) => {
        return compareDay(new Date(el.date), new Date(date));
    });

    const getFlagColor = (flag) => {
        if (flag === "0") {
            return '#741414';
        } else if (flag === "1") {
            return '#143d08';
        } else {
            return '#9d8e12';
        }
    }

    const rowHeight = 48;

    const getTimeCell = (element, height) => {
        const { time, flag } = element;
        return <div key={uuidv4()} style={{
            backgroundColor: getFlagColor(flag),
            height: height !== null ? height : rowHeight, border: '1px dotted grey',
        }}>
            <span style={{ color: 'white', fontSize: 11}}>{time}</span>
        </div>
    }

    const getTimeCells = (elements) => {
        return <div style={{ height: rowHeight }}>
            {elements.map((el) => {
                return getTimeCell(el, rowHeight / elements.length);
            })}
        </div>
    }

    if (_availability !== undefined && _availability.length !== 0) {
        return <div style={{ flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
            {_availability[0].schedule.length !== 1 ? getTimeCells(_availability[0].schedule) : getTimeCell(_availability[0].schedule[0], null)}
        </div>
    } else {
        return <div />
    }
}

export default CellContent;