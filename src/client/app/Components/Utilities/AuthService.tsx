import * as SettingsStore from "../Configuration/SettingsStore";
import * as StringTools from "./StringTools";
import * as GlobalConfig from "../Configuration/GlobalConfig";

function tokenIsExpired() {
    const accessTokenExp = new Date(SettingsStore.getValue(SettingsStore.ACCESS_TOKEN_EXP));
    const utcNow = new Date((new Date()).toUTCString());
    if (utcNow.getTime() < accessTokenExp.getTime()) {
        return false;
    } else {
        return true;
    }
}

function calcTokenExp(seconds) {
    const currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + parseInt(seconds));
    return currentDate.toUTCString();
}

export function getToken() {
    const accessToken = SettingsStore.getValue(SettingsStore.ACCESS_TOKEN);
    return (!StringTools.stringIsNullOrEmpty(accessToken) ? "Bearer " + accessToken : null);
}

export function setToken(token) {
    const tokenArray = StringTools.queryStringToArray(token);
    SettingsStore.setValue(SettingsStore.ACCESS_TOKEN, tokenArray.find((el) => {
        return el.key === "access_token";
    }).value);
    SettingsStore.setValue(SettingsStore.ACCESS_TOKEN_EXP, calcTokenExp(tokenArray.find((el) => {
        return el.key === "expires_in";
    }).value));
}

export function clearToken() {
    SettingsStore.deleteValue(SettingsStore.ACCESS_TOKEN);
    SettingsStore.deleteValue(SettingsStore.ACCESS_TOKEN_EXP);
}

export function getAuthUrl() {
    const authUrl = GlobalConfig.AUTHORIZE_URL
        + "?client_id=" + GlobalConfig.CLIENT_ID
        + "&response_type=" + GlobalConfig.RESPONSE_TYPE
        + "&scope=" + GlobalConfig.SCOPE
        + "&redirect_uri=" + GlobalConfig.REDIRECT_URL;
    return authUrl;
}

export function getLogoutUrl() {
    return GlobalConfig.LOGOUT_URL;
}

export function isAuthenticated() {
    if (StringTools.stringIsNullOrEmpty(getToken())) {
        return false;
    } else {
        return true;
    }
}