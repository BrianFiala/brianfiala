export const transformStock = (symbol, newStockInfo) => {
  const stock = {
    details: newStockInfo[0],
    timeseries: newStockInfo[1]
  }
  let stockTimeseries = []
  for (let i = 0; i < stock.timeseries.c.length; ++i) {
    stockTimeseries.push({
      x: (new Date(stock.timeseries.t[i] * 1000)).toDateString(),
      y: stock.timeseries.c[i]
    })
  }
    
  return {
    // week: {
    //   id: symbol,
    //   data: stockTimeseries  
    // },
    // month: {
    //   id: symbol,
    //   data: stockTimeseries  
    // },
    // year: {
    //   id: symbol,
    //   data: stockTimeseries  
    // },
    // threeYears: {
    //   id: symbol,
    //   data: stockTimeseries  
    // },
    id: symbol,
    data: stockTimeseries,
    details: stock.details
  }
}
  
export const newStockDataIsValid = (newStockInfo) => {
  return newStockInfo.length === 2 && newStockInfo[0].pc
  && newStockInfo[1].s === 'ok' && newStockInfo[1].c.length
}

export const mergedStockInfo = (symbol, newStockInfo, stocks) => {
  const newStock = transformStock(symbol, newStockInfo)
  const newStocks = [...stocks]
  let alreadyHasStock = false
  for (let i = 0; i < newStocks.length; ++i) {
    if (newStocks[i].id === symbol) {
      newStocks[i] = newStock
      alreadyHasStock = true
      break
    }
  }
  if (!alreadyHasStock) {
    newStocks.push(newStock)
  }

  return newStocks
}