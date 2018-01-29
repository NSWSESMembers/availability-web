export function stringIsNullOrEmpty(str) {
    if (str !== null && str !== undefined && str.toString().trim().length !== 0) {
        return false;
    } else {
        return true;
    }
}

export function queryStringToArray(queryString) {
    queryString = queryString.replace('?', '');
    const result = [];
    queryString.split("&").forEach((element) => {
        result.push({
            key: element.split("=")[0],
            value: element.split("=")[1]
        });
    });
    return result;
}