// Entries only record a month (or just a year), so never show a day.
export type DatePrecision = 'month' | 'year';

export function formatEntryDate(date: Date, precision: DatePrecision = 'month'): string {
  return date.toLocaleDateString('en-GB', {
    month: precision === 'month' ? 'long' : undefined,
    year: 'numeric',
    timeZone: 'UTC',
  });
}
