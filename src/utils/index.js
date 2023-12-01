export function moveNext(course, topicId, subId) {
    if (!course?.topics || !course?.topics[topicId]) return "#";
    let nextSubId = Number(subId) + 1;
    if (course.topics[topicId].subs[nextSubId]) {
        return `/main/courses/${course?.id}/${topicId}/${nextSubId}`;
    }
    return `/main/courses/${course?.id}/${course.topics[topicId].nextTopic}/0`;
}

export function setProgress(progress, topicId, subId) {
    progress = structuredClone(progress);
    if (!progress[topicId]) {
        progress[topicId] = [];
    }
    progress[topicId][subId] = true;
    return progress;
}