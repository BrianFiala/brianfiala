const ONE_DAY = 60 * 60 * 24
const ONE_WEEK = ONE_DAY * 7
const ONE_MONTH = ONE_WEEK * 4
const ONE_YEAR = ONE_WEEK * 52
const THREE_YEARS = ONE_YEAR * 3
const API_KEY = 'bq18qvfrh5refsdeb8hg'

export const StockService = {
  getStockTimeseries: async (symbol, duration) => {
    let start, resolution
    let stock = {}
    const end = Math.floor(Date.now() / 1000)
    switch (duration) {
    case 'month':
      start = end - ONE_MONTH
      resolution = 'D'
      break
    case 'year':
      start = end - ONE_YEAR
      resolution = 'W'
      break
    case 'threeYears':
      start = end - THREE_YEARS
      resolution = 'M'
      break
    default:
      start = end - ONE_WEEK
      resolution = 'D'
    }

    if (symbol) {
      stock = await (
        await fetch(
          'https://finnhub.io/api/v1/stock/candle' +
          `?symbol=${symbol}` +
          `&resolution=${resolution}` +
          `&from=${start}` +
          `&to=${end}` +
          `&token=${API_KEY}`
        )).json()
    }

    return stock
  }
}
