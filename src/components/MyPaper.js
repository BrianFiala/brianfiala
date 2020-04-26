import {h} from 'preact' /** @jsx h */
import {makeStyles, useTheme} from '@material-ui/styles'
import {Paper} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}))

export default function MyPaper({elevation, children, unscrollable}) {  
  const classes = useStyles(useTheme())

  return (
    <Paper
      elevation={elevation}
      style={{overflow: unscrollable ? 'visible' : 'auto'}}
      className={classes.paper}>
      {children}
    </Paper>
  )
}
