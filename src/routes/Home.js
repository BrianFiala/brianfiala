import { Grid, Paper, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Chart from '../components/z_Chart'
import Deposits from '../components/z_Deposits'
import Orders from '../components/z_Orders'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

export default function Home() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  return (
    <Grid container spacing={3}>
      {/* Info Card */}
      <Grid item>
        <Card raised>
          <CardContent>
            <Typography variant="h6">
              Home card
            </Typography>
            <br />
            <Typography variant="h3">
              Welcome to home route
            </Typography>
            <br />
            <Typography variant="body2">
              Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">OKAY</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  )
}
