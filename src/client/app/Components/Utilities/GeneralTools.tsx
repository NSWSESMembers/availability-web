export function isDev() {
    const hostname = window && window.location && window.location.hostname;
    if (hostname === 'localhost') {
        return true;
    } else {
        return false;
    }
}