

export function moveNext(course, topicId, subId) {
    if (!course[topicId]) return "#";
    let nextSubId = Number(subId) + 1;
    if (course[topicId][nextSubId]) {
        return `/main/courses/${course?.id}/${topicId}/${nextSubId}`;
    } else {
        return `/main/courses/${course?.id}/${course[topicId].nextTopic}/0`;
    }
}