const API_KEY = 'bq18qvfrh5refsdeb8hg'

const StockService = {
  getStockTimeseries: async (symbol) => {
    let stock = {}
    const end = Math.floor(Date.now() / 1000)
    const start = end - 60 * 60 * 24 * 7 * 52 * 3

    if (symbol) {
      stock = await (
        await fetch(
          'https://finnhub.io/api/v1/stock/candle' +
          `?symbol=${symbol}` +
          '&resolution=D' +
          `&from=${start}` +
          `&to=${end}` +
          `&token=${API_KEY}`
        )).json()
    }

    return stock
  },

  getStockDetails: async (symbol) => {
    let stock = {}
    if (symbol) {
      stock = await (
        await fetch(
          'https://finnhub.io/api/v1/quote' +
          `?symbol=${symbol}` +
          `&token=${API_KEY}`
        )).json()
    }

    return stock
  },

  fetchStockData: (symbol) => {
    return Promise.all([
      StockService.getStockDetails(symbol),
      StockService.getStockTimeseries(symbol)
    ])
  }
}

export default StockService
