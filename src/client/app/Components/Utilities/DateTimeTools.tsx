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

export function formatDateForViewFromString(date: string) {
    const momentDate = moment(date);
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

export function addDaysToDate(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

export function getWeekDay(startDate: moment.Moment, day: number) {
    const result = new Date(startDate.toDate());
    result.setDate(startDate.toDate().getDate() + (day - 1));
    return moment(result.toDateString()).format("DD-MM");
}

export function compareDay(date1: Date, date2: Date) {
    const _day1 = moment(date1.toDateString()).format("DD-MM");
    const _day2 = moment(date2.toDateString()).format("DD-MM");
    return (_day1 === _day2);
}