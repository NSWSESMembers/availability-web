import { isDev } from '../Utilities/GeneralTools';

export const CLIENT_ID = isDev() ? "callout.web.dev" : "callout.web.test";
export const SCOPE = "public";
export const RESPONSE_TYPE = "token";
export const AUTHORIZE_URL = isDev() ? "https://identitydev.ses.nsw.gov.au/core/connect/authorize" : "https://identitytest.ses.nsw.gov.au/core/connect/authorize";
export const REDIRECT_URL = isDev() ? "http://localhost:5000/redirect" : "https://web.callout.nsws.es/redirect";

export const BASE_API_URI = isDev() ? "https://apidevbeacon.ses.nsw.gov.au/Api/v2" : "https://apitestbeacon.ses.nsw.gov.au/Api/v2";
export const API_TIMEOUT = 15000;

export const API_DATE_FORMAT = "DD-MM-YYYY";