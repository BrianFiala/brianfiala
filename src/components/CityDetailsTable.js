import { h } from 'preact' /** @jsx h */
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Title from './Title'
import MyPaper from './MyPaper'

export default function CityDetailsTable({cities}) {
  return (
    <MyPaper>
      <Title>City details</Title>
      <Table size="small" aria-label="city info table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Feels like</TableCell>
          </TableRow>
        </TableHead>
            
        <TableBody>
          {cities.map((city) => (
            <TableRow key={city.name}>
              <TableCell scope="row">{city.name}, {city.state}</TableCell>
              <TableCell align="right">{city.current.weather[0].description}</TableCell>
              <TableCell align="right">{city.current.temp}</TableCell>
              <TableCell align="right">{city.current.feels_like}</TableCell>
            </TableRow> ))}
        </TableBody>
      </Table>
    </MyPaper>
  )
}