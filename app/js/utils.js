export const debounce = (callback, tm) => {
    let timeout;

    return (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(e);
        }, tm);
    };
};


export const trottle = (callback, tm) => {
    let wait = false;
    return (e) => {
        if (wait) return;
        wait = true;
        callback(e);
        setTimeout(() => (wait = false), tm);
    };
};
