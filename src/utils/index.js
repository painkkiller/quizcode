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

export function isTopicFunfilled(course, topicId) {
    console.log('isTopicFunfilled', course, topicId);
    const stepsLength = course.content.topics[topicId].subs.length;
    const progressLength = course.progress[topicId]?.length;
    return stepsLength === progressLength && course.progress[topicId].every(item => item);
}