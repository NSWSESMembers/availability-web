import * as moment from 'moment';
import * as GlobalConfig from '../Configuration/GlobalConfig';

export function formatDateRange(momentStartDate: moment.Moment, momentEndDate: moment.Moment) {
    if (momentStartDate !== null && momentEndDate !== null) {
        const _startDate = momentStartDate.format('DD MMM YYYY');
        const _endDate = momentEndDate.format('DD MMM YYYY');
        return _startDate + " to " + _endDate;
    } else {
        return '';
    }
}

export function formatDate(momentDate: moment.Moment) {
    if (momentDate !== null) {
        return momentDate.format(GlobalConfig.API_DATE_FORMAT);
    } else {
        return '';
    }
}

export function formatDateForView(momentDate: moment.Moment) {
    if (momentDate !== null) {
        return momentDate.format(GlobalConfig.VIEW_DATE_FORMAT);
    } else {
        return '';
    }
}

export function getMomentDateObject(date: Date) {
    return moment(date.toDateString());
}

export function getToday(): moment.Moment {
    return getMomentDateObject(new Date());
}