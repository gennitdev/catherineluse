import { DateTime } from "luxon";

export const relativeTime = (dateISO: string): string | null => {
  const dateObj = DateTime.fromISO(dateISO);
  const time = dateObj.toRelative();

  return time;
};
