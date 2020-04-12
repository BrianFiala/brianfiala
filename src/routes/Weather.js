import CitySearch from '../components/CitySearch'
import CityDetailsTable from '../components/CityDetailsTable'
import { useState } from 'preact/hooks'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '100%'
  }
}))

export default function Weather() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [ cities, setCities ] = useState([])

  return (
    <Grid container spacing={3}>
      {/* Info item */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <InfoItem
            identifier="Weather Card"
            title="Welcome to weather route"
            message={message} />
        </Paper>
      </Grid>
      {/* City search item */}
      <Grid item xs={12} md={3}>
        <Paper elevation={cities.length ? 1 : 8} className={classes.paper}>
          <CitySearch cities={cities} setCities={setCities} />
        </Paper>
      </Grid>
      {/* City details item */}
      {cities.length ?
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <CityDetailsTable cities={cities} />
          </Paper>
        </Grid>
        : null }
    </Grid>
  )
}
