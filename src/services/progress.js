

export function getUserProgress (userId, courseId) {
    const json = getLocalObject(userId);
    console.log('getUserProgress', json);
    return json[courseId] ? json[courseId] : {};
}

export function setUserProgress (userId, courseId, progress) {
    const json = getLocalObject(userId);
    json[courseId] = progress;
    localStorage.setItem('userId', JSON.stringify(json));
}

function getLocalObject(userId) {
    let json = localStorage.getItem(userId);
    try {
        json = json ? JSON.parse(json): {};
    } catch(e) {
        console.error('cant parse object', e);
        json = {};
    }
    return json;
}