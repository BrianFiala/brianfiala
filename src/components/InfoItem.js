import { Paper, Typography, Button } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/styles'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}))

export default function InfoItem({ identifier, title, message }) {
  const theme = useTheme()
  const classes = useStyles(theme)
  
  return (
    <Paper className={classes.paper}>
      <Title>{identifier}</Title><br />
      <Typography variant="h3">{title}</Typography><br />
      <Typography variant="body2">{message}</Typography>
      <Button color="primary" size="large">OKAY</Button>
    </Paper>
  )
}
