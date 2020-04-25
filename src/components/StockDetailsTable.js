import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StateProvider'
import Title from './Title'
import MyPaper from './MyPaper'
import {mergedStockInfo, newStockDataIsValid} from '../utils/StockUtils'
import StockService from '../api/StockService'
import {makeStyles, useTheme} from '@material-ui/styles'
import TrashIcon from '@material-ui/icons/DeleteOutlined'
import RefreshIcon from '@material-ui/icons/RefreshOutlined'
import {Container, IconButton, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  iconButton: {
    paddingLeft: theme.spacing(1)
  },
  actionIconContainer: {
    display: 'flex'
  }
}))

export default function StockDetailsTable() {
  const {stocks, setStocks} = useStore()
  const classes = useStyles(useTheme())

  function removeStock(event, symbol) {
    event.preventDefault()
    const newStocks = stocks.filter(stock => stock.id !== symbol)
    setStocks(newStocks)
  }

  function refreshStock(event, symbol) {
    event.preventDefault()
    const duration = 'year'
    StockService.fetchStockData(symbol, duration)
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
              <TableCell component="th" scope="row">
                <Container
                  disableGutters={true}
                  className={classes.actionIconContainer}>
                  <IconButton
                    edge="start"
                    aria-label="remove"
                    className={classes.iconButton}
                    onClick={(event) => {removeStock(event, stock.id)}}>
                    <TrashIcon />
                  </IconButton>
                  <IconButton
                    edge="start"
                    aria-label="refresh"
                    className={classes.iconButton}
                    onClick={(event) => {refreshStock(event, stock.id)}}>
                    <RefreshIcon />
                  </IconButton>
                </Container>
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