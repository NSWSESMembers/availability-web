import * as moment from 'moment';
import * as GlobalConfig from '../Configuration/GlobalConfig';
import strings from '../Resources/Strings';

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

export function addDaysToMomentDate(momentDate: moment.Moment, days: number) {
    return moment(addDaysToDate(momentDate.toDate(), days).toDateString());
}

export function getWeekDayDate(startDate: moment.Moment, day: number) {
    const result = new Date(startDate.toDate());
    result.setDate(startDate.toDate().getDate() + (day - 1));
    return moment(result.toDateString()).format("DD-MM");
}

export function getWeekDayName(day: number) {
    let result = '';

    switch (day) {
        case 0:
            result = strings.general_weekday_sunday;
            break;
        case 1:
            result = strings.general_weekday_monday;
            break;
        case 2:
            result = strings.general_weekday_tuesday;
            break;
        case 3:
            result = strings.general_weekday_wednesday;
            break;
        case 4:
            result = strings.general_weekday_thursday;
            break;
        case 5:
            result = strings.general_weekday_friday;
            break;
        case 6:
            result = strings.general_weekday_saturday;
            break;
    }

    return result;
}

export function compareDay(date1: Date, date2: Date) {
    const _day1 = moment(date1.toDateString()).format("DD-MM");
    const _day2 = moment(date2.toDateString()).format("DD-MM");
    return (_day1 === _day2);
}