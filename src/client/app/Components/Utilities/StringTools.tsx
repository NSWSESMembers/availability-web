export function stringIsNullOrEmpty(str) {
    if (str !== null && str !== undefined && str.toString().trim().length !== 0) {
        return false;
    } else {
        return true;
    }
}

export function queryStringToArray(queryString) {
    const result = [];
    if (!stringIsNullOrEmpty(queryString)) {
        queryString = queryString.replace('?', '');
        queryString.split("&").forEach((element) => {
            result.push({
                key: element.split("=")[0],
                value: element.split("=")[1]
            });
        });
    }
    return result;
}

export function queryStringToValue(queryString, key) {
    let result = "";
    if (!stringIsNullOrEmpty(queryString)) {
        queryString = queryString.replace('?', '');
        const keyValues = queryString.split("&");
        keyValues.forEach((element) => {
            if (element.split("=")[0].toLowerCase() === key.toLowerCase()) {
                result = element.split("=")[1];
            }
        });
    }
    return result;
}