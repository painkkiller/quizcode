

export function getUserProgress (userId) {
    const json = localStorage.getItem(userId);
    return JSON.parse(json);
}

export function setUserProgress (userId, userObject) {
    const json = JSON.stringify(userObject);
    localStorage.setItem(userId, json);
}