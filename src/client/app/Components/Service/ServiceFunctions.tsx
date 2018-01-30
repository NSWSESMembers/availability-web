import axios from 'axios';
import * as ServiceDefinitions from './ServiceDefinitions';
import * as GlobalConfig from '../Configuration/GlobalConfig';
import { getToken, getAuthUrl, clearToken } from '../Utilities/AuthService';
import store from '../Store';
import { formatDateRange, formatDate } from '../Utilities/DateTimeTools';
import * as moment from 'moment';

import requests from '../../Mock/requests';

function makeUrl(methodUrl) {
    return GlobalConfig.BASE_API_URI + methodUrl;
}

function switchToLogin() {
    window.location.assign(getAuthUrl());
}

export async function getUserInfo() {
    const result = {
        status: -1,
        userDetails: {}
    };
    await axios.get(makeUrl(ServiceDefinitions.GET_USER_INFO), {
        headers: { Authorization: getToken() },
        validateStatus: (status) => true,
        timeout: GlobalConfig.API_TIMEOUT
    }).then((response) => {

        switch (response.status) {
            case 200:
                result.status = 1;
                result.userDetails = {
                    userFirstName: "Simon",
                    userLastName: "Gethin"
                }
                break;
            case 401:
                result.status = 2;
                clearToken();
                switchToLogin();
                break;
            default:
                result.status = -1
                break;
        }
    }).catch((error) => {
        result.status = -1;
    });
    return result;
}
export async function getRequests(startDate: moment.Moment, endDate: moment.Moment, groupCode, capabilityCode, priorityCode) {
    const _params = {
        startDate,
        endDate,
        dateText: formatDateRange(startDate, endDate),
        groupCode,
        capabilityCode,
        priorityCode
    };
    const result = {
        status: -1,
        params: _params,
        requests: []
    };
    await axios.get(makeUrl(ServiceDefinitions.GET_REQUESTS), {
        params: {
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            groupCode,
            capabilityCode,
            priorityCode
        },
        headers: { Authorization: getToken() },
        validateStatus: (status) => true,
        timeout: GlobalConfig.API_TIMEOUT
    }).then((response) => {
        switch (response.status) {
            case 200:
                result.status = 1;
                result.requests = requests;
                break;
            case 401:
                result.status = 2;
                clearToken();
                switchToLogin();
                break;
            default:
                result.status = -1
                break;
        }
    }).catch((error) => {
        result.status = -1;
    });
    return result;
}