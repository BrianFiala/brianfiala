import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import message from '../assets/message.txt'
import CitySearch from '../components/CitySearch'
import CityDetailsTable from '../components/CityDetailsTable'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Weather() {
  const {cities} = useStore()
  
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
        <CitySearch elevation={cities.length ? 1 : 16} />
      </Grid>
      {/* City details item */}
      {cities.length ?
        <Grid item xs={12} md={9}>
          <CityDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
