import { DateTime } from 'luxon';

export const DEFAULT_FORMAT = {
  DATETIME: DateTime.DATETIME_SHORT,
  DATE: DateTime.DATE_SHORT
};

export const ConvertUTCToLocalString = (datetime, format) =>
  DateTime.fromISO(datetime, {
    zone: 'utc'
  })
    .toLocal()
    .toLocaleString(format || DEFAULT_FORMAT.DATETIME);

export const IsValidDate = datetime =>
  DateTime.fromISO(datetime) > DateTime.fromISO('2000-01-01');
