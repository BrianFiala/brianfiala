import Title from './Title'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

export default function CityDetailsTable({cities}) {
  return (
    <>
      <Title>City details</Title>
      <Table size="small" aria-label="city info table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
            
        <TableBody>
          {cities.map((city) => (
            <TableRow key={city.name}>
              <TableCell component="th" scope="row">
                {city.name}
              </TableCell>
              <TableCell align="right">{city.id}</TableCell>
              <TableCell align="right">{city.state}</TableCell>
              <TableCell align="right">{(city.coord.lat).toFixed(2)}</TableCell>
              <TableCell align="right">{(city.coord.lon).toFixed(2)}</TableCell>
            </TableRow> ))}
        </TableBody>
      </Table>
    </>
  )
}