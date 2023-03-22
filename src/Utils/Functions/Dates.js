import moment from 'moment'

import { RANGES } from '../config/range'

/**
 * return startDate of the range based on endDate
 * @param {String} range on of Ranges
 * @param {Date | String | Number} endDate - defaults to current date-time
 * @returns {Date} startDate
 */
export function getStartDateOfRange(range, endDate) {
  const base = endDate || new Date()

  switch (range) {
    case RANGES.LAST_24:
      return moment(base).subtract(1, 'days').toDate()
    case RANGES.LAST_7D:
      return moment(base).subtract(7, 'days').toDate()
    case RANGES.LAST_MONTH:
      return moment(base).subtract(1, 'months').toDate()
    case RANGES.LAST_6MONTH:
      return moment(base).subtract(6, 'months').toDate()
    case RANGES.LAST_YEAR:
      return moment(base).subtract(1, 'years').toDate()
    case RANGES.LAST_5YEAR:
      return moment(base).subtract(5, 'years').toDate()
    case RANGES.ALL:
    default:
      return moment('2008/10/31').toDate()
  }
}
