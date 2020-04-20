import {h} from 'preact' /** @jsx h */
import {Paper} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '100%'
  }
}))

export default function MyPaper({elevation, children}) {  
  const classes = useStyles(useTheme())

  return (
    <Paper elevation={elevation} className={classes.paper}>{children}</Paper>
  )
}
