export const StockService = {
  getStock: async (symbol, resolution, start, end) => {
    if (symbol) {
      const stock = await (
        await fetch(
          'https://finnhub.io/api/v1/stock/candle' +
          `?symbol=${symbol}` +
          `&resolution=${resolution}` +
          `&from=${start}` +
          `&to=${end}` +
          `&token=bq18qvfrh5refsdeb8hg`
        )).json()
    
      return stock
    }

    return {}
  }
}
