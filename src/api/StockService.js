export const StockService = {
  getStock: async (symbol) => {
    const jsonPromise = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bq18qvfrh5refsdeb8hg`
    )
    //graph: `https://finnhub.io/api/v1/stock/candle?${symbol}=BMW.DE&resolution=60&from=${start}&to=${end}&token=bq18qvfrh5refsdeb8hg`
    return jsonPromise.json()
  },

  transformStock: (symbol, stockData) => {
    let data = []

    if (stockData.c) {
      for (let i = 0; i < stockData.c.length; ++i) {
        data.push({
          x: (new Date(stockData.t[i] * 1000)).toDateString(),
          y: stockData.c[i]
        })
      }
    }

    return {
      id: symbol,
      data: [...data]
    }
  }
}
