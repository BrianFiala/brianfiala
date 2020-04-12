import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Title from '../components/Title'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}))

export default function Home() {
  const theme = useTheme()
  const classes = useStyles(theme)
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Home Card</Title><br />
          <Typography variant="h3">
            Welcome to home route
          </Typography><br />
          <Typography variant="body2">
            Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie.
          </Typography>
          <Button size="large">OKAY</Button>
        </Paper>
      </Grid>
    </Grid>
  )
}
