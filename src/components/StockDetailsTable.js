import { h } from 'preact' /** @jsx h */
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Title from './Title'
import MyPaper from './MyPaper'

export default function CityDetailsTable({stocks}) {
  return (
    <MyPaper>
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
            <TableRow key={stock.id}>
              <TableCell component="th" scope="row">
                {stock.id}
              </TableCell>
              <TableCell align="right">{stock.details.pc.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.o.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.c.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.h.toFixed(2)}</TableCell>
              <TableCell align="right">{stock.details.l.toFixed(2)}</TableCell>
            </TableRow> ))}
        </TableBody>
      </Table>
    </MyPaper>
  )
}