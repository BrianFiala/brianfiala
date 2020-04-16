import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import { Grid } from '@material-ui/core'
import CitySearch from '../components/CitySearch'
import CityDetailsTable from '../components/CityDetailsTable'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'

export default function Weather() {
  const [ cities, setCities ] = useState([])

  return (
    <Grid container spacing={3}>
      {/* Info item */}
      <Grid item xs={12}>
        <InfoItem
          identifier="Weather Card"
          title="Welcome to weather route"
          message={message} />
      </Grid>
      {/* City search item */}
      <Grid item xs={12} md={3}>
        <CitySearch cities={cities} setCities={setCities} elevation={cities.length ? 1 : 8} />
      </Grid>
      {/* City details item */}
      {cities.length ?
        <Grid item xs={12} md={9}>
          <CityDetailsTable cities={cities} />
        </Grid>
        : null }
    </Grid>
  )
}
