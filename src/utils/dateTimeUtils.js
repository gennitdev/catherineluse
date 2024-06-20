import { DateTime } from "luxon";
export const relativeTime = (dateISO) => {
    const dateObj = DateTime.fromISO(dateISO);
    const time = dateObj.toRelative();
    return time;
};
