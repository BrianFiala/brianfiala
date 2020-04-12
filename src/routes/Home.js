import { Grid, Paper } from '@material-ui/core'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'
import { makeStyles, useTheme } from '@material-ui/core/styles'

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
          <InfoItem
            identifier="Home Card"
            title="Welcome to the home route"
            message={message} />
        </Paper>
      </Grid>
    </Grid>
  )
}
