export const transformStock = (symbol, newStockInfo) => {
  const details = newStockInfo[0]
  const timeseries = newStockInfo[1]
  const timeseriesLength = timeseries.c.length
  let stockTimeseriesThreeYears = []

  for (let i = 0; i < timeseriesLength; ++i) {
    stockTimeseriesThreeYears.push({
      x: (new Date(timeseries.t[i] * 1000)).toDateString(),
      y: timeseries.c[i]
    })
  }

  const stockTimeseriesWeek = stockTimeseriesThreeYears.slice(-7)
  const stockTimeseriesMonth = stockTimeseriesThreeYears.slice(-30)
  const stockTimeseriesYear = stockTimeseriesThreeYears.slice(-365)
    
  return {
    id: symbol,
    details: {
      details,
      id: symbol
    },
    week: {
      id: symbol,
      data: stockTimeseriesWeek
    },
    month: {
      id: symbol,
      data: stockTimeseriesMonth
    },
    year: {
      id: symbol,
      data: stockTimeseriesYear
    },
    threeYear: {
      id: symbol,
      data: stockTimeseriesThreeYears
    }
  }
}
  
export const newStockDataIsValid = (newStockInfo) => {
  return newStockInfo.length === 2 && newStockInfo[0].pc
  && newStockInfo[1].s === 'ok' && newStockInfo[1].c.length
}

export const mergedStockInfo = (symbol, newStockInfo, stocks) => {
  const newStock = transformStock(symbol, newStockInfo)
  const newStocksDetails = stocks.details.filter(stock => stock.id !== symbol)
  newStocksDetails.push(newStock.details)
  const newStocksWeek = stocks.week.filter(stock => stock.id !== symbol)
  newStocksWeek.push(newStock.week)
  const newStocksMonth = stocks.month.filter(stock => stock.id !== symbol)
  newStocksMonth.push(newStock.month)
  const newStocksYear = stocks.year.filter(stock => stock.id !== symbol)
  newStocksYear.push(newStock.year)
  const newStocksThreeYear = stocks.threeYear.filter(stock => stock.id !== symbol)
  newStocksThreeYear.push(newStock.threeYear)

  return {
    details: newStocksDetails,
    week: newStocksWeek,
    month: newStocksMonth,
    year: newStocksYear,
    threeYear: newStocksThreeYear
  }
}