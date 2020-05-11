import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import message from '../assets/message.txt'
import CitySearch from '../components/weather/CitySearch'
import CityDetailsTable from '../components/weather/CityDetailsTable'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Weather() {
  const {cities} = useStore()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="Weather Card"
          title="Welcome to weather route"
          message={message} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CitySearch />
      </Grid>
      {cities.length ?
        <Grid item xs={12} md={9}>
          <CityDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
