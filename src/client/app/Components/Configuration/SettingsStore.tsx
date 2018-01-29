export const ACCESS_TOKEN = "access_token";
export const ACCESS_TOKEN_EXP = "access_token_exp";

export function getValue(key) {
    return sessionStorage.getItem(key);
}

export function setValue(key, value) {
    sessionStorage.setItem(key, value);
}

export function deleteValue(key) {
    sessionStorage.removeItem(key);
}