import Title from './Title'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

export default function CityDetailsTable({stocks}) {
  return (
    <>
      <Title>Stock details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">Close</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Low</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.symbol}>
              <TableCell component="th" scope="row">
                {stock.symbol}
              </TableCell>
              <TableCell align="right">stock.pc</TableCell>
              <TableCell align="right">stock.o</TableCell>
              <TableCell align="right">stock.c</TableCell>
              <TableCell align="right">stock.h</TableCell>
              <TableCell align="right">stock.l</TableCell>
            </TableRow> ))}
        </TableBody>
      </Table>
    </>
  )
}