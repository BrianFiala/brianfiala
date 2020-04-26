import {h} from 'preact' /** @jsx h */
import {useStore} from '../../api/StoreProvider'
import StockService from '../../api/StockService'
import {mergedStockInfo, newStockDataIsValid} from '../../utils/StockUtils'
import Title from '../Title'
import MyPaper from '../MyPaper'
import TableActions from '../TableActions'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function StockDetailsTable() {
  const {stocks, setStocks} = useStore()

  function removeStock(event, symbol) {
    event.preventDefault()
    const newStocks = stocks.filter(stock => stock.id !== symbol)
    setStocks(newStocks)
  }

  function refreshStock(event, symbol) {
    event.preventDefault()
    StockService.fetchStockData(symbol)
      .then(newStockInfo => {
        if (newStockDataIsValid(newStockInfo)) {
          setStocks(mergedStockInfo(symbol, newStockInfo, stocks))
        }
      })
      .catch(err => console.error('stock service error', err))
  }

  return (
    <MyPaper>
      <Title>Stock details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">Close</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Low</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map(stock => (
            <TableRow key={stock.id}>
              <TableCell scope="row">
                <TableActions 
                  identifier={stock.id}
                  removeCallback={removeStock}
                  refreshCallback={refreshStock} />
              </TableCell>
              <TableCell>{stock.id}</TableCell>
              <TableCell align="right">{stock.details.pc.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.o.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.c.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.h.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.l.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MyPaper>
  )
}