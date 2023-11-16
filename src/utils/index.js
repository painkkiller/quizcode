

export function moveNext(course, topicId, subId) {
    if (!course?.topics || !course?.topics[topicId]) return "#";
    let nextSubId = Number(subId) + 1;
    if (course.topics[topicId].subs[nextSubId]) {
        return `/main/courses/${course?.id}/${topicId}/${nextSubId}`;
    } else {
        return `/main/courses/${course?.id}/${course.topics[topicId].nextTopic}/0`;
    }
}